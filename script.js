document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });

  function meadd(){
    alert('ME ADCIONE NO DISCORD! MEU NICK É: gui_14_ ')

    var url = "https://discord.com/channels/@me";
        
    // Redirecionamento
    window.open(url, "_blank");
  }