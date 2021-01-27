const request = require('request');

const mockData = {
  _id: 1,
  __v: 0,
  isAvailable: false,
  maxCapacity: 500,
  currentCapacity: 450
}

const makeRequest = (method, uri) => {

  const options = {
    method,
    uri
  };

  return new Promise((resolve, reject) => {
    request(options, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (res.statusCode === 400) {
          resolve(res);
        } else {
          let response = JSON.parse(res.body);
          resolve(response);
        }
      };
    });
  });

};

describe('availability endpoint', () => {

  it('should return a service with one ID that matches mock', () => {

    makeRequest('GET', 'http://localhost:3001/api/availability?id=4')
      .then(data => {
        expect(typeof data).toEqual(typeof mockData);
        for (let key in data) {
          expect(mockData).toHaveProperty(key);
        }
      })
      .catch(err => {
        console.error(err);
      })

  });

  it('should return a 400 if no ID is provided', () => {
    makeRequest('GET', 'http://localhost:3001/api/availability')
      .then(data => {
        expect(data.statusCode).toEqual(400);
        expect(data.body).toEqual('Must Supply a ID parameter with request')
      })
  });

  it('should return a 400 if ID is not found', () => {
    makeRequest('GET', 'http://localhost:3001/api/availability?id=123')
      .then(data => {
        expect(data.statusCode).toEqual(400);
        expect(data.body).toEqual('Unable to find ID');
      });
  })


})