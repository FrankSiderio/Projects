var playerLocation = 0;
var counters = [9];
var counterMoves = 0;
var errorCount = 0;
var changedMap = false;
var power = false; // false means power is off
var locArray = [];
var inventory = ["", "", "", ""];


//Item object
function Item()
{
	this.name = "";
	this.desc = "";
	this.loc = null; //where the item is
	this.hasIt = false; //if the player has the item

	this.toString = function()
			{
				return "You have the " + this.name + this.desc;
			}

}
//instances of the items
var key = new Item();
key.name = "key";
key.loc = 1;

var keyCard = new Item();
keyCard.name = "Key Card";
keyCard.loc = 4;

var mJ = new Item();
mJ.name = "Michael Jackson";
mJ.loc = 7;

var password = new Item();
password.name = "Password:";
password.desc = "Alan is Awesome";
password.loc = 2; 


//initial message	
function init()
{
	display_Message("Taylor Swift wants to become number 1 and stay that way forever. " +
	"You are Beyonce and must survive in this advanced prison she has put you in. " + 
	"The goal of the game is to escape and release her new album to the entire world for free.\n\n" +
	"You are in the center of the prison. Something went wrong. " +
		"The power went off and there is a flashlight on the ground. You pick it up.");
	
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
			if(keyCard.hasIt === true)
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
		case 0: loc0_Center();
				break;
		case 1: loc1_Key();
				break; 
		case 2: loc2_Computer();
				break;
		case 3: loc3_HarryStyles();
				break;
		case 4: loc4_KeyCard();
				break;
		case 5: loc5_DoorRoom();
				break;
		case 6: loc6_Ex();
				break;
		case 7: loc7_MJ();
				break;
		case 8: loc8_Selena();
				break; 
		case 9: loc9_Power();
				if(mJ.hasIt === true)
				{
					power = true;
					changeMap();
				}
				break;
		case 10: loc10_Win();
		
	}
	display_Message(locArray[playerLocation].toString());
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
	counters[playerLocation]++;
	counterMoves++;

}


//if the player messes up
function NavigationError()
{
	var errorMessage = "You cannot go that way.";
	errorCount++;
	
	if(errorCount === 3)
		alert("Okay. That is enough.");
		
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
		
	else if(input.value === "take" && playerLocation === key.loc)
	{
		key.hasIt = true;
		inventory[0] = key.name;
		display_Message(key.toString());
	}
		
	else if(input.value === "take" && playerLocation === keyCard.loc)
	{
		keyCard.hasIt = true;
		inventory[1] = keyCard.name;
		display_Message(keyCard.toString());
	}
		
	else if(input.value === "unlock" && key.hasIt === true)
	{
		if(playerLocation === mJ.loc)
		{
			inventory[2] = mJ.name;
			mJ.hasIt = true;
			display_Message(mJ.toString());
		}
	}

	else if(input.value === "write" && playerLocation === password.loc)
	{
		inventory[3] = password.name + password.desc;
		display_Message(password.toString());
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
		for(var i = 0; i < 4; i++)
			display_Message(inventory[i]);
	
	}
	
	else
	{
		display_Message("Error. Valid Inputs: Up,up,Down,down,Right,right,Left,left\n");
		display_Message("take, unlock, inventory, write (only if you are at the correct location)");
	} 

}



function txtCommand_keyPress(keyboardEvent)
{
	if(keyboardEvent.which === 13)
		btnGo_click();
}
