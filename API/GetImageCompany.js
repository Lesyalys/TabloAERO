import axios from 'axios';

export const getImageCompanies = (companyNames) => {
    //    const currentHost = window.location.origin;
    return Promise.all(
        companyNames.map(company =>
            new Promise((resolve) => {
                const companyValid = company || '';
                axios.get(`http://172.20.0.33:3010/getImage/${companyValid}`)
                    .then(response => {
                        let base64String = '';
                        if (Array.isArray(response.data) && response.data.length > 0) {
                            base64String = response.data[0].IMAGEB64;
                        } else if (response.data?.IMAGEB64) {
                            base64String = response.data.IMAGEB64;
                        } else if (typeof response.data === 'string') {
                            base64String = response.data;
                        }
                        resolve({ company, image: base64String });
                    })
                    .catch(error => {
                        console.log(`Error fetching image for ${company}:`, error);
                        resolve({ company, image: '' });
                    });
            })
        )
    );
};