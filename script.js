 function calculateArea() {
         
            let radius = prompt("Enter the radius of the circle:");
           
            radius = parseFloat(radius);
        
            if (!isNaN(radius) && radius > 0) {
                
                let area = Math.PI * radius * radius;
             
                area = area.toFixed(2);
    
                alert("The area of the circle with radius " + radius + " is " + area);
            } else {

                alert("Invalid input. Please enter a positive number for the radius.");
            }
           
}
calculateArea();
