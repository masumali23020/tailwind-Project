// mobile navbar 


document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('humbager');
  const CloseButton = document.getElementById('closed');
  const navMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', function() {
      if (navMenu.classList.contains('hidden')) {
          navMenu.classList.remove('hidden');
          navMenu.classList.add('block');
      } else {
          navMenu.classList.remove('block');
          navMenu.classList.add('hidden');
      }
  });
  CloseButton.addEventListener('click', function() {
      if (navMenu.classList.contains('hidden')) {
          navMenu.classList.remove('hidden');
          navMenu.classList.add('block');
      } else {
          navMenu.classList.remove('block');
          navMenu.classList.add('hidden');
      }
  });
});


// image carosol 
document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('carouselSlides');
    const slides = slidesContainer.children;
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      const offset = -index * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }
  
    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      
      showSlide(currentIndex);
    });
  
    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });
  });



  // chart 

  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        suffix: "%",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries,
      },
      data: [
        {
          type: "line",
          axisYIndex: 1,

          name: "WPPOOL",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "#%",
          dataPoints: [
            { x: new Date(2014, 0, 01), y: 20 },
            { x: new Date(2014, 01, 01), y: 10 },
            { x: new Date(2014, 02, 01), y: 40 },
            { x: new Date(2014, 03, 01), y: 89 },
            { x: new Date(2014, 04, 01), y: 90 },
            { x: new Date(2014, 05, 01), y: 92 },
            { x: new Date(2014, 06, 01), y: 50 },
            { x: new Date(2014, 07, 01), y: 75 },
            { x: new Date(2014, 08, 01), y: 27 },
            { x: new Date(2014, 09, 01), y: 49 },
            { x: new Date(2014, 10, 01), y: 46 },
            { x: new Date(2014, 11, 01), y: 27 },
            { x: new Date(2015, 00, 01), y: 50 },
          ],
        },
        {
          type: "line",
          axisYIndex: 1,
          name: "Google",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###%",
          dataPoints: [
            { x: new Date(2014, 0, 01), y: 1 },
            { x: new Date(2014, 01, 01), y: 20 },
            { x: new Date(2014, 02, 01), y: 25 },
            { x: new Date(2014, 03, 01), y: 49 },
            { x: new Date(2014, 04, 01), y: 60 },
            { x: new Date(2014, 05, 01), y: 42 },
            { x: new Date(2014, 06, 01), y: 50 },
            { x: new Date(2014, 07, 01), y: 65 },
            { x: new Date(2014, 08, 01), y: 17 },
            { x: new Date(2014, 09, 01), y: 39 },
            { x: new Date(2014, 10, 01), y: 56 },
            { x: new Date(2014, 11, 01), y: 17 },
            { x: new Date(2015, 00, 01), y: 30 },
          ],
        },
        {
          type: "line",
          axisYIndex: 1,
          name: "Microsoft",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###%",
          dataPoints: [
            { x: new Date(2014, 0, 01), y: 0 },
            { x: new Date(2014, 01, 01), y: 10 },
            { x: new Date(2014, 02, 01), y: 30 },
            { x: new Date(2014, 03, 01), y: 59 },
            { x: new Date(2014, 04, 01), y: 80 },
            { x: new Date(2014, 05, 01), y: 92 },
            { x: new Date(2014, 06, 01), y: 50 },
            { x: new Date(2014, 07, 01), y: 75 },
            { x: new Date(2014, 08, 01), y: 67 },
            { x: new Date(2014, 09, 01), y: 49 },
            { x: new Date(2014, 10, 01), y: 26 },
            { x: new Date(2014, 11, 01), y: 37 },
            { x: new Date(2015, 00, 01), y: 40 },
          ],
        },
        {
          type: "line",
          axisYIndex: 1,
          name: "Twiter Index",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###%",
          dataPoints: [
            { x: new Date(2014, 0, 01), y: 0 },
            { x: new Date(2014, 01, 01), y: 20 },
            { x: new Date(2014, 02, 01), y: 30 },
            { x: new Date(2014, 03, 01), y: 40 },
            { x: new Date(2014, 04, 01), y: 40 },
            { x: new Date(2014, 05, 01), y: 52 },
            { x: new Date(2014, 06, 01), y: 30 },
            { x: new Date(2014, 07, 01), y: 45 },
            { x: new Date(2014, 08, 01), y: 27 },
            { x: new Date(2014, 09, 01), y: 49 },
            { x: new Date(2014, 10, 01), y: 46 },
            { x: new Date(2014, 11, 01), y: 27 },
            { x: new Date(2015, 00, 01), y: 60 },
          ],
        },
      ],
    });
    chart.render();

    function toogleDataSeries(e) {
      if (
        typeof e.dataSeries.visible === "undefined" ||
        e.dataSeries.visible
      ) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  };


 