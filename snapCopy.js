  document.getElementById("snapCopy").addEventListener("click", snapCopy);


  function snapCopy(){
    
    
    if (!navigator.clipboard) {
        // Clipboard API not available
        return
      }
      try {
          snapText.select()
          document.execCommand('copy')
          snapText.blur()
          snapCopy.text = 'Copied!'
        // navigator.clipboard.writeText(text)

      } catch (err) {
          alert('error' + err)
        console.error('Failed to copy!', err)
      }
  } 
