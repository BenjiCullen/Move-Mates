import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import './style.css'
import { QUERY_ServiceS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import {
  UPDATE_ServiceS,
  UPDATE_CURRENT_Service,
} from '../../utils/actions';

function ServiceMenu() {

  const dispatch = useDispatch();

  const Services = useSelector((state) => state.Services);

  const { loading, data: ServiceData } = useQuery(QUERY_ServiceS);

  useEffect(() => {
    if (ServiceData) {
      dispatch({
        type: UPDATE_ServiceS,
        Services: ServiceData.Services
      });
      ServiceData.Services.forEach(Service => {
        idbPromise('Services', 'put', Service);
      });
    } else if (!loading) {
      idbPromise('Services', 'get').then(Services => {
        dispatch({
          type: UPDATE_ServiceS,
          Services: Services,
        });
      });
    }
  }, [ServiceData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_Service,
      currentService: id,
      location: document.getElementById("product-list").scrollIntoView({behavior: 'smooth'})
    });
  };

  const handleAllServicesClick = () => {
    dispatch({
      type: UPDATE_CURRENT_Service,
      currentService: '',
      location: document.getElementById("product-list").scrollIntoView({behavior: 'smooth'})
    })
  }
  

  return (
    <div className='scrollmenu'>

      <Link 
        id='all-Services'
        to=''
        onClick={() => {
          handleAllServicesClick()
        }}
      >
        All Our Services That We Provide
      </Link>

      {Services.map((item) => (
        <Link
          key={item._id}
          to=''
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </Link>
      ))}

    </div>
  );
}

export default ServiceMenu;