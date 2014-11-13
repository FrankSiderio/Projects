var playerLocation = 0;
var counterRoom0 = 0;
var counterRoom1 = 0;
var counterRoom2 = 0;
var counterRoom3 = 0;
var counterRoom4 = 0;
var counterRoom5 = 0;
var counterRoom6 = 0;
var counterRoom7 = 0;
var counterRoom8 = 0;
var counterRoom9 = 0;
var counterMoves = 0;
var errorCount = 0;
var changedMap = false;
var key = false;
var keyCard = false;
var doYouHaveMJ = false;
var power = false; // false means power is off
	
function init()
{
	display_Message("Taylor Swift wants to become number 1 and stay that way forever. " +
	"You are Beyonce and must survive in this advanced prison she has put you in. " + 
	"The goal of the game is to escape and release her new album to the entire world for free.");
	
	look();
	
}

function btnGo_clickUp()
{

	//middle line of locations 3, 0, 4
	if(playerLocation === 0)
	{
		playerLocation = 1;
		look();
	}
	
	else if(playerLocation === 3)
	{
		playerLocation = 8;
		look();
	}
	
	else if(playerLocation === 4)
	{
		playerLocation = 5;	
		look();
	}
	
	//bottom line of locations 2, 6, 7
	else if(playerLocation === 2)
	{
		playerLocation = 0;  
		look();
	}
	
	else if(playerLocation === 6)
	{
		playerLocation = 4;
		look();
	}
	
	else if(playerLocation === 7)
	{
		playerLocation = 3;
		look();
	}

	else
		NavigationError();	
		
} 

function btnGo_clickDown()
{
	//middle line of locations 0, 3, 4
	if(playerLocation === 0)
	{
		playerLocation = 2;
		look();
	}
	
	else if(playerLocation === 3)
	{
		playerLocation = 7;
		look();
	}
	
	else if(playerLocation === 4)
	{
		playerLocation = 6;
		look();
	}
	
	//Top line of locations 1, 5, 8
	else if(playerLocation === 1)
	{
		playerLocation = 0;
		look();
	}
	
	else if(playerLocation === 5)
	{
		playerLocation = 4;
		look();
	}
	
	else if(playerLocation === 8)
	{
		playerLocation = 3;
		look();
	}
	
	else
		NavigationError();

}  

function btnGo_clickRight()
{
	//middle line of locations(going up and down) 0, 1, 2
	if(playerLocation === 0)
	{
		playerLocation = 4;
		look();
	}
	
	else if(playerLocation === 1)
	{
		playerLocation = 5;
		look();
	}
	
	else if(playerLocation === 2)
	{
		playerLocation = 6;
		look();
	}
	
	//left side of locations(going up and down) 3, 7, 8
	else if(playerLocation === 3)
	{
		playerLocation = 0;
		look();
	}
	
	else if(playerLocation === 7)
	{
		playerLocation = 2;
		look();
	}
	
	else if(playerLocation === 8)
	{
		playerLocation = 1;
		look();
	}
	
	//top left of unchanged map
	else if(playerLocation === 9)
	{
		playerLocation = 8;
		look();
	}
	
	//for changed map
	else if(playerLocation === 5 && changedMap === true)
	{
		playerLocation = 10;
		look();
	}

	else
		NavigationError();
}  

function btnGo_clickLeft()
{
	//middle line of locations 0, 1, 2
	if(playerLocation === 0)
	{
		playerLocation = 3;
		look();
	}
	
	else if(playerLocation === 1)
	{
		playerLocation = 8;
		look();
	}
	
	else if(playerLocation === 2)
	{
		playerLocation = 7;
		look();
	}
	
	//right side locations 4, 5, 6
	else if(playerLocation === 4)
	{
		playerLocation = 0;
		look();
	}

	else if(playerLocation === 5)
	{
		playerLocation = 1;
		look();
	}
	
	else if(playerLocation === 6)
	{
		playerLocation = 2;
		look();
	}
	
	//top left location 8 unchanged map
	else if(playerLocation === 8)
	{
		playerLocation = 9;
		look();
	}
	
	//for changed map
	else if(playerLocation === 10)
	{
		playerLocation = 5;
		look();
	}
	
	else
		NavigationError();    	
}

function disable_Buttons()
{
	//bottom three locations 7, 2, 6
	if(playerLocation === 7)
	{
		document.getElementById("UpButton").disabled = false;
		document.getElementById("DownButton").disabled = true; //disabled button
		document.getElementById("LeftButton").disabled = true; //disabled button
		document.getElementById("RightButton").disabled = false;
	}
	
	else if(playerLocation === 2)
	{
		document.getElementById("UpButton").disabled = false;
		document.getElementById("DownButton").disabled = true; //disabled button
		document.getElementById("LeftButton").disabled = false;
		document.getElementById("RightButton").disabled = false;
	}
	
	else if(playerLocation === 6)
	{
		document.getElementById("UpButton").disabled = false;
		document.getElementById("DownButton").disabled = true; //disabled button
		document.getElementById("LeftButton").disabled = false;
		document.getElementById("RightButton").disabled = true; //disabled button
	}
	
	//middle lines 3,4,0
	else if(playerLocation === 3)
	{
		document.getElementById("UpButton").disabled = false;
		document.getElementById("DownButton").disabled = false;
		document.getElementById("LeftButton").disabled = true; //disabled button
		document.getElementById("RightButton").disabled = false;
	}
	
	else if(playerLocation === 4)
	{
		document.getElementById("UpButton").disabled = false;
		document.getElementById("DownButton").disabled = false;
		document.getElementById("LeftButton").disabled = false; 
		document.getElementById("RightButton").disabled = true; //disabled button
	}
	
	else if(playerLocation === 0)
	{
		document.getElementById("UpButton").disabled = false;
		document.getElementById("DownButton").disabled = false;
		document.getElementById("LeftButton").disabled = false; 
		document.getElementById("RightButton").disabled = false;
	}
	
	//top three locations 8 ,1, 5
	else if(playerLocation === 8)
	{
		document.getElementById("UpButton").disabled = true; //disabled button
		document.getElementById("DownButton").disabled = false;
		document.getElementById("LeftButton").disabled = false; 
		document.getElementById("RightButton").disabled = false; 
	}
	
	else if(playerLocation === 1)
	{
		document.getElementById("UpButton").disabled = true; //disabled button
		document.getElementById("DownButton").disabled = false;
		document.getElementById("LeftButton").disabled = false; 
		document.getElementById("RightButton").disabled = false; 
	}
	
	else if(playerLocation === 5)
	{
		if(changedMap === false)
		{
			document.getElementById("UpButton").disabled = true; //disabled button
			document.getElementById("DownButton").disabled = false;
			document.getElementById("LeftButton").disabled = false; 
			document.getElementById("RightButton").disabled = true; //disabled button 
		}
		
		else if(changedMap === true)
		{
			if(keyCard === true)
			{
				document.getElementById("UpButton").disabled = true; //disabled button
				document.getElementById("DownButton").disabled = false;
				document.getElementById("LeftButton").disabled = false; 
				document.getElementById("RightButton").disabled = false;
			}
			//if you do not have the key card
			else 
			{
				document.getElementById("UpButton").disabled = true; //disabled button
				document.getElementById("DownButton").disabled = false;
				document.getElementById("LeftButton").disabled = false; 
				document.getElementById("RightButton").disabled = true; //disabled button
			}
		}
	}
	
	//top left corner of prison
	else if(playerLocation === 9)
	{	
		document.getElementById("UpButton").disabled = true; //disabled button
		document.getElementById("DownButton").disabled = true; //disabled button
		document.getElementById("LeftButton").disabled = true; //disabled button
		document.getElementById("RightButton").disabled = false;
	}

}

function look()
{

	switch(playerLocation) 
	{
		case 0: loc0();
				break;
		case 1: loc1();
				break; 
		case 2: loc2();
				break;
		case 3: loc3();
				break;
		case 4: loc4();
				break;
		case 5: loc5();
				break;
		case 6: loc6();
				break;
		case 7: loc7();
				break;
		case 8: loc8();
				break; 
		case 9: loc9();
				if(doYouHaveMJ === true)
				{
					power = true;
					changeMap();
				}
				break;
		case 10: loc10();
		
	}
	disable_Buttons();
		
		
}

function changeMap()
{
	document.getElementById("map").src = "map2F.jpg";
	changedMap = true;	
}

//utilize this more in the future.
function doCounter()
{
	if(playerLocation === 0)
		counterRoom0++;

	else if(playerLocation === 1)
		counterRoom1++;

	else if(playerLocation === 2)		
		counterRoom2++;
	
	else if(playerLocation === 3)
		counterRoom3++;

	else if(playerLocation === 4)		
		counterRoom4++;
	
	else if(playerLocation === 5)		
		counterRoom5++;
	
	else if(playerLocation === 6)
		counterRoom6++;
		
	else if(playerLocation === 7)
		counterRoom7++;
	
	else if(playerLocation === 8)			
		counterRoom8++;

	else if(playerLocation === 9)			
		counterRoom9++;
		
	counterMoves++;

}



function NavigationError()
{
	var errorMessage = "Error you managed to find a way to break the game. Nice.";
	errorCount++;
	
	if(errorCount === 3)
		alert("Okay. You broke it. Please let me know how and I will fix it.");
		
	display_Message(errorMessage);
	
}

function display_Message(m)
{
	display = document.getElementById("taMain");
	display.value = m + "\n" + "\n" + display.value;

}	

function btnGo_click()
{
	var input = document.getElementById("txtCommand");

	if(input.value === "Up" || input.value === "up")
		btnGo_clickUp();
	
	else if(input.value === "Down" || input.value === "down")
		btnGo_clickDown();

	else if(input.value === "Right" || input.value === "right")
		btnGo_clickRight();

	else if(input.value === "Left" || input.value === "left")
		btnGo_clickLeft();
		
	else if(input.value === "take" && playerLocation === 1)
	{
		key = true;
		display_Message("You picked up the key.");
	}
		
	else if(input.value === "take" && playerLocation === 4)
	{
		keyCard = true;
		display_Message("You picked up the key card.");
	}
		
	else if(input.value === "unlock" && key === true)
	{
		if(playerLocation === 7)
		{
			doYouHaveMJ = true;
			display_Message("He is now free!");
		}
	}
	
	else if(playerLocation === 10)
	{
		if(input.value === "Alan is Awesome")
			display_Message("You Win!");
		
		else
			display_Message("Wrong password!");
	}
	
	else if(input.value === "inventory")
	{
		if(key === true)
			display_Message("Key\n");
		
		if(keyCard === true)
			display_Message("Key Card\n");
			
		if(doYouHaveMJ === true)
			display_Message("MJ");
			
		else if(key === false && keyCard === false && doYouHaveMJ === false)
			display_Message("You have nothing.");
	}
	
	else
	{
		display_Message("Error. Valid Inputs: Up,up,Down,down,Right,right,Left,left\n");
		display_Message("take, unlock");
	}

}



function txtCommand_keyPress(keyboardEvent)
{
	if(keyboardEvent.which === 13)
		btnGo_click();
}


