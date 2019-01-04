var slide = document.getElementById('cir');
var auto_clk = document.getElementById('mycan');
var mmanual = document.getElementById('manual');

    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        console.log('Checked');
        slide.style.left = "28px";
        slide.style.transition = "0.5s";
        auto_clk.style.display = "none";
        mmanual.style.display = "block";
      } else {
        console.log('Unchecked');
         slide.style.left = "4px";
         slide.style.transition = "0.5s";
         auto_clk.style.display = "block";
         mmanual.style.display = "none";
      }
    });
