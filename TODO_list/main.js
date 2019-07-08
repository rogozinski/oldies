

//IMPORT TASK NAME AND ITS PRIORITY
function newTask(){
	var inpTask = document.getElementById("inpTask").value;
	var inpPriority = document.getElementById("inpPriority").value;
	var check = true;
	var tskContainer = document.getElementById("tskContainer");
	
	localStorage.setItem('task', inpTask);
	
	//CREATE TABLE
	var tr = document.createElement("tr");

	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	
	var checkBox = document.createElement("input"); 
		checkBox.setAttribute("type","checkBox");
		
	var binIcon = document.createElement("span"); 
		binIcon.setAttribute("class","glyphicon glyphicon-trash");
		binIcon.setAttribute("onclick","removeRow(this)");
	
	
	tr.appendChild(td1); 
	tr.appendChild(td2); 
	tr.appendChild(td3);
	
	td1.appendChild(document.createTextNode(inpTask));
	td2.appendChild(document.createTextNode(inpPriority));
	td3.appendChild(checkBox); 
	td3.appendChild(binIcon); 

	tskContainer.appendChild(tr);
	//SET INPUTS TO DEFAULT STATE
	document.getElementById("inpTask").value = '';
	document.getElementById("inpPriority").value = 'Medium';
}
//CHECK IF INPUT IS EMPTY
function verify(){
	var inpTask = document.getElementById("inpTask").value;
	if(inpTask == ''){
		alert("Don't forget to type in your new task!!");
	} else{
		newTask();
	}
}

//REMOVE ROW
function removeRow(r){
	var row = r.parentNode.parentNode;
		row.parentNode.removeChild(row);
}
//SORT TABLE
function sortTable(n) {
		var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		var usrTable = document.getElementById("tskTable");
			switching = true;
			dir = "asc"; 

		while (switching) 
		{
			switching = false;
			rows = usrTable.getElementsByTagName("tr");

			for (i=1;i<(rows.length-1);i++)
			{
				shouldSwitch = false;
				x = rows[i].getElementsByTagName("td")[n];
				y = rows[i + 1].getElementsByTagName("td")[n];
				if (dir == "asc") 
				{
					if (x.innerHTML.toLowerCase()>y.innerHTML.toLowerCase())
					{
						shouldSwitch= true;
						break;
					}
				} else 
				if (dir == "desc")
				{
					if (x.innerHTML.toLowerCase()<y.innerHTML.toLowerCase()) 
					{
						shouldSwitch = true;
						break;
					}
				}
			}
			if (shouldSwitch) 
			{
				rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
				switching = true;
				switchcount ++;      
			}
			else 
			{
				if (switchcount == 0 && dir == "asc") 
				{
					dir = "desc";
					switching = true;
				}
			}
		}
}