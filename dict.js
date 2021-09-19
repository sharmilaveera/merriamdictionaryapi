function wordSearch(){

    let word = document.getElementsByClassName("input")[0].value;
    let audioBox = document.querySelector('.audio');
    
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1c5ee62f-ee1d-4544-97ba-74697227ce99`)
    .then((res)=> res.json())
    .then((res1)=>{
        console.log(res1);
      
        const card=document.createElement('div');
        card.setAttribute('class','card');
         const cardbody=document.createElement('div');
        cardbody.setAttribute('class','card-body');
        const head1=document.createElement('h5');
        head1.setAttribute('class','card-title');
        head1.innerHTML="Definition:"
        
     const span= document.createElement('span');
     span.innerHTML=res1[0].fl;
    
      const p1 = document.createElement('p');
      p1.innerHTML= res1[0].shortdef;
      
      const head3= document.createElement('h5');
      head3.setAttribute('class','card-title');
     head3.innerHTML=`Other words from ${word}`;
    
      const p2 = document.createElement('p');
      p2.innerHTML= res1[0].meta.stems;
    
      const head2=document.createElement('h5');
      head2.setAttribute('class','card-title');
      head2.innerHTML="Pronounciation";
      const br= document.createElement('br');
      const soundName = res1[0].hwi.prs[0].sound.audio;
      if(soundName) {
          renderSound(soundName);
      }
      function renderSound(soundName) {
        // https://media.merriam-webster.com/soundc11
        let subfolder = soundName.charAt(0);
        let soundSrc = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=1c5ee62f-ee1d-4544-97ba-74697227ce99`;
    
        let aud = document.createElement('audio');
        aud.src = soundSrc;
        aud.controls = true;
        audioBox.appendChild(aud);
        
    }
     
    
    cardbody.append(head1,span,p1,head3,p2,head2,br,audioBox);
    card.append(cardbody);
    document.body.append(card);
    
    
    })
          
        .catch((err)=>{
            console.log(err);
        });
        
    }
    