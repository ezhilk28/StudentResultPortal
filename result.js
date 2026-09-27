const students = { 
    "23CS101": 
    { name: "Vignesh", ds: 90, cpp: 88, dbms: 92, os: 85 }, 
    "23CS102": 
    { name: "Arun Kumar", ds: 80, cpp: 76, dbms: 81, os: 79 }, 
     "23CS103": 
    { name: "Ezhil", ds: 90, cpp: 86, dbms: 92, os: 89 },
     "23CS104": 
    { name: "Divya", ds: 70, cpp: 86, dbms: 72, os: 69 } ,
     "23CS105": 
    { name: "Thamarai", ds: 95, cpp: 90, dbms: 82, os: 89 }  
};


    let r = localStorage.getItem('regno'); 
    let s = students[r]; 
    if (s) { 
        let total = s.ds + s.cpp + s.dbms + s.os; 
        let pct = (total / 400 * 100).toFixed(2); 
        let grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : 'C'; 
        let result = pct >= 50 ? 'PASS' : 'FAIL'; 
        info.innerHTML = `<h3>${s.name}</h3><p>Reg No: ${r}</p>`; 
        ds.textContent = s.ds; 
        cpp.textContent = s.cpp; 
        dbms.textContent = s.dbms; 
        os.textContent = s.os; 
        summary.innerHTML = `<h3>Total: ${total}</h3><h3>Percentage: ${pct}%</h3><h3>Grade: ${grade}</h3><h3>Result: ${result}</h3>`; 
    } else {
        localStorage.setItem(
        "errorMessage",
        "Student Not Found"
        );
        window.location.href = "index.html";
    }