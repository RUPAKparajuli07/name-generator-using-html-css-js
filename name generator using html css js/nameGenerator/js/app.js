document.getElementById("generate-names").addEventListener('submit',loadNames);


function loadNames(event){
    event.preventDefault();
    

    const country=document.getElementById('country').value;
    const gender=document.getElementById('gender').value;
    const amount=document.getElementById('quantity').value;

    let url='https://uinames.com/api/?';

    if(country!==''){
        url+=`region=${country}&`;
    }
    if(gender!==''){
        url+=`gender=${gender}&`;
    }
    if(amount!=''){
        url+=`amount=${amount}&`;
    }
    console.log(url);
    
    conn = new XMLHttpRequest();

    conn.open('GET',url,true);

    conn.onload=function () {
        if(this.status===200){
            const names=JSON.parse(this.responseText);

            let html='<h2>Generated  Names</h2>';
            html+='<ul class="list">';
            names.forEach(name => {
                html+=`
                <li>${name.name}</li>
                `;
            });
            html+='</ul>'
            document.querySelector('#result').innerHTML=html;
        }
    }
    conn.send();
    
}