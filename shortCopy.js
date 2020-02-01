  document.getElementById("shortCopy").addEventListener("click", shortCopy);


  function shortCopy(){
    
    
    if (!navigator.clipboard) {
        // Clipboard API not available
        return
      }
      try {
          shortText.select()
          document.execCommand('copy')
          shortText.blur()
          shortCopy.text = 'Copied!'
        // navigator.clipboard.writeText(text)

      } catch (err) {
          alert('error' + err)
        console.error('Failed to copy!', err)
      }
  } 