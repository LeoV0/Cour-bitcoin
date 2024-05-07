const url ='https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=2023-03-19'; 

let graphique;
async function recupererPrix(){
    try{
        const response = await axios.get(url);
        const prix = Object.values(response.data.bpi); 
        const date = Object.keys(response.data.bpi);
        const moisDates = [];
        const prixDates = [];

        // recuperer les premier de chaque mois 
        for (let i = 0; i < date.length; i ++){
            const dates = date[i];
            const price = prix[i];

            if (dates.endsWith('01')){
                moisDates.push(dates);
                prixDates.push(price);
            }
        }
        console.log(moisDates);
        
        graphique = new Chart(document.getElementById('chart'), {
            type: 'line',
            data:{
                labels:moisDates, 
                datasets:[{
                    label:'Prix du bitcoin', 
                    data:prixDates, 
                    fill:true, 
                    corderColor: 'green',
                    tension:0.2, 
                }, 
            ],
        },
        options:{},
    }); 
        
    } catch(error){
        console.log(error);
    }
}

recupererPrix();