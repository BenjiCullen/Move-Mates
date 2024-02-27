import React from 'react';

function Footer() {

    const style = {
        backgroundColor: "black",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        left: "0",
        opacity: "0.5",
        color: "white"
    };

    return(
        <footer id="footer" style={style}>
            <div>Move Mates</div>
            <a href="https://github.com/jcgom3/Project-3-Move-mates"><img alt='' src="https://img.icons8.com/bubbles/50/000000/github.png"/></a>
            <a href="linkedin.com"><img alt='' src="https://img.icons8.com/bubbles/50/000000/linkedin.png"/></a>
            <a href="gmail.com"><img alt='' src="https://img.icons8.com/bubbles/50/000000/gmail.png"/></a>
            <div className="copyright">Copyright &copy; 2024 Move Mates</div>
        </footer>
    );
}

export default Footer;