var playerLocation = 0;
var counters = [9];
var counterMoves = 0;
var errorCount = 0;
var changedMap = false;

var power = false; // false means power is off
var locArray = [];
var inventory = ["", "", "", ""];

var nav = [ //U   D   R   L
   /* 0 */  [ 1,  2,  4,  3],
   /* 1 */  [-1,  0,  5,  8],
   /* 2 */  [ 0, -1,  6,  7],
   /* 3 */  [ 8,  7,  0, -1],
   /* 4 */  [ 5,  6, -1,  0],
   /* 5 */  [-1,  4, 10,  1],
   /* 6 */  [ 4, -1, -1,  2],
   /* 7 */  [ 3, -1,  2, -1],
   /* 8 */  [-1,  3,  1,  9],
   /* 9 */  [-1, -1,  8, -1],
   /* 10*/  [-1, -1, -1, 5]
   
	  ];

var UP = 0;
var DOWN = 1;
var RIGHT = 2;
var LEFT= 3;
function Item()
{
	this.name = "";
	this.desc = "";
	this.id   = ""; //what the player has to enter in to get the item
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
key.id = "take";
key.loc = 1;

var keyCard = new Item();
keyCard.name = "Key Card";
keyCard.id = "take";
keyCard.loc = 4;

var mJ = new Item();
mJ.name = "Michael Jackson";
mJ.loc = 7;

var password = new Item();
password.name = "Password:";
password.id = "write";
password.desc = "Alan is Awesome";
password.loc = 2; 


	
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
	nextLoc(UP);
	look();	
} 

function btnGo_clickDown()
{
	nextLoc(DOWN);
	look();
}  

function btnGo_clickRight()
{
	nextLoc(RIGHT);
	look();
}  

function btnGo_clickLeft()
{
	nextLoc(LEFT);
	look();
}


function nextLoc(dir)
{
	var newLoc = nav[playerLocation][dir];

	if (newLoc >= 0)
		playerLocation = newLoc;

	else
		display_Message("You cannot go that way.");
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
	doCounter();
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
	{
		if(changedMap === true && power === true)    //they can only go right here if the power is on and
			btnGo_clickRight();    // the map is changed
		
		else
			NavigationError();
	}

	else if(input.value === "Left" || input.value === "left")
		btnGo_clickLeft();
		
	else if(input.value === key.id && playerLocation === key.loc)
	{
		key.hasIt = true;
		inventory[0] = key.name;
		display_Message(key.toString());
	}
		
	else if(input.value === keyCard.id && playerLocation === keyCard.loc)
	{
		if(keyCard.hasIt === false)
		{
			keyCard.hasIt = true;
			inventory[1] = keyCard.name;
			display_Message(keyCard.toString());
		}
		
		else
			display_Message("You already have the key.");
	}
		
	else if(input.value === "unlock" && key.hasIt === true)
	{
		if(playerLocation === 7)
		{
			inventory[2] = mJ.name;
			mJ.hasIt = true;
			display_Message(mJ.toString());
		}
	}

	else if(input.value === password.id && playerLocation === password.loc)
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
		display_Message("take, unlock, inventory");
	} 

}

function txtCommand_keyPress(keyboardEvent)
{
	if(keyboardEvent.which === 13)
		btnGo_click();
}
