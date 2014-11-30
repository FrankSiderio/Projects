locArray[0] = new Location();
locArray[1] = new Location();
locArray[2] = new Location();
locArray[3] = new Location();
locArray[4] = new Location();
locArray[5] = new Location();
locArray[6] = new Location();
locArray[7] = new Location();
locArray[8] = new Location();
locArray[9] = new Location();
locArray[10] = new Location();


function Location()
{
	this.name = "";
	this.desc = "";
	this.item = "";

	this.toString = function()
			{
				return this.desc + this.item;
			}


}





//instances of the locations
function loc0_Center()
{
	if(counterRoom0 === 0)
		locArray[0].desc = "You are in the center of the prison. Something went wrong. " +
		"The power went off and there is a flashlight on the ground. You pick it up.";
	
	else
		locArray[0].desc = "You are in the center of the prison.";
	
	doCounter();
	
}

function loc1_Key() 
{
	if(key.hasIt === false)
		locArray[1].desc = "There is a key on the ground. Enter in 'take' to pick up.";
	
	else
		locArray[1].desc = "You are back in the room that had the key.";
	
	
		
   	doCounter();
   	
}

function loc2_Computer()
{
	if(power === false)
		locArray[2].desc = "You found a computer but you must turn on the power to use it.";
		
	else
		locArray[2].desc = "Good job! You go into the computer and find the password to release "+
		"Taylor's album to the whole world! It's 'Alan is Awesome' Who's Alan? Enter in 'write' to write it down.";
	
		
	doCounter();
}

function loc3_HarryStyles()
{
	locArray[3].desc = "Oh look! You found Harry Styles. He says to get out before Taylor finds you.";
	doCounter();
}

function loc4_KeyCard()
{
	if(keyCard.hasIt === false)
		locArray[4].desc = "There is an empty cell with a key card. Enter in 'take' to pick up.";
		
	else
		locArray[4].desc = "You are in the room that had the key card.";
	doCounter();
}

function loc5_DoorRoom()
{
	if(power === false)
		locArray[5].desc = "Just an ordinary empty room with a door you cannot open.";
		
	else
		locArray[5].desc = "Nice work! You can open the door now as long as you have the key card!"
		 + " I hope you remembered the password! If not, go find the computer!";
	doCounter();
}

function loc6_Ex()
{
	locArray[6].desc = "You find one of Taylor's ex-boyfriends crying in a fettle position.";
	doCounter();
}

function loc7_MJ()
{
	if(mJ.hasIt === false)
		locArray[7].desc = "Pop star Michael Jackson is in a cell. He is alive after all and says " +
		"he knows how to turn on the power. If you have the key enter in 'unlock' to free MJ.";
		
	else
		locArray[7].desc = "You are back where you found Michael.";
	doCounter();
}

function loc8_Selena()
{
	locArray[8].desc = "You find Selena Gomez locked up in a cell. I thought they were friends?";
	doCounter();
}

function loc9_Power()
{	
	if(mJ.hasIt === false)
		locArray[9].desc = "This is the power room. You need Michael to turn on the power.";
	
	else
		locArray[9].desc = "You are back in the power room. The power is on! Go to the computer!";
	doCounter();
}

function loc10_Win()
{
	locArray[10].desc = "Congratulations! You have made it to the end of the game! Enter in the " +
	"password to defeat Taylor and release her new album to the world for free!";
	
	doCounter();
}
