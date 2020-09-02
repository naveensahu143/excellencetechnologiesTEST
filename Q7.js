let xhr = new XMLHttpRequest();
xhr.open('GET', www.example.com/api/get/1, true);
xhr.onload = () => {
      if (xhr.status === 200) { // 200 means a success 
        const json = JSON.parse(xhr.responseText);
        console.log(json); 
      } else { 
        console.log("404");
      }
    };
xhr.send();