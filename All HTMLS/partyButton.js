/*--------------------------------------------------------------------------------
          ON CLICK FOR MY PARTY MODE CODE WILL GO HERE   
            */

          const partyModeButton = document.getElementById("partyMode");
          const myAudio = document.getElementById('pitbull')

          partyModeButton.addEventListener("click", () => {
            alert(`OHHHHH SHIIIII, It's time to PARRRTYYYYYY!!! 
                        VOLUMES UP!`)
          })

          partyModeButton.addEventListener('click', () => {
            myAudio.play();
          })





       