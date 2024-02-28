export function pluralize(name, count) {
    if (count === 1) {
      return name
    }
    return name + 's'
  }
  
  export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
          const request = window.indexedDB.open('move-mates', 2);

               let db, tx, store;
  
      request.onupgradeneeded = function(e) {
        const db = e.target.result;
            if (!db.objectStoreNames.contains('products')) {
                   db.createObjectStore('products', { keyPath: '_id' });
            }
            if (!db.objectStoreNames.contains('services')) { // Corrected Services to services for consistency
                   db.createObjectStore('services', { keyPath: '_id' });
           }
            if (!db.objectStoreNames.contains('cart')) {
                   db.createObjectStore('cart', { keyPath: '_id' });
           }
        };
  
      request.onerror = function(e) {
        console.error('There was an error', e);
           reject(e);
      };
  
      request.onsuccess = function(e) {
        db = e.target.result;
        //  tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName);
         tx.onerror = function(e) {
          reject(e);
        };
  
        // Handling methods with promise resolution
        try {
          switch (method) {
            case 'put':
              store.put(object).onsuccess = function() {
                resolve(object);
              };
              break;
            case 'get':
              store.getAll().onsuccess = function(e) {
                resolve(e.target.result);
              };
              break;
            case 'delete':
              store.delete(object._id).onsuccess = function() {
                resolve();
              };
              break;
            default:
              throw new Error('No valid method');
          }
        } catch (error) {
          reject(error);
        }
  
        tx.oncomplete = function() {
          db.close();
        };
      };
    });
  }
  