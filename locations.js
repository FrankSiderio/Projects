function loc0()
{
	if(counterRoom0 === 0)
		var desc = "You are in the center of the prison. Something went wrong. " +
		"The power went off and there is a flashlight on the ground. You pick it up.";
	
	else
		var desc = "You are in the center of the prison.";
	
	doCounter();
	display_Message(desc);
}

function loc1() 
{
	if(key === false)
		var desc = "There is a key on the ground. Enter in 'take' to pick up.";
	
	else
		var desc = "You are back in the room that had the key.";
		
   	doCounter();
   	display_Message(desc);
}

function loc2()
{
	if(power === false)
		var desc = "You found a computer but you must turn on the power to use it.";
		
	else
		var desc = "Good job! You go into the computer and find the password to release "+
		"Taylor's album to the whole world! It's 'Alan is Awesome' Who's Alan? Remember this!";
	
		
	doCounter();
	display_Message(desc);
}

function loc3()
{
	var desc = "Oh look! You found Harry Styles. He says to get out before Taylor finds you.";
	doCounter();
	display_Message(desc);
}

function loc4()
{
	if(keyCard === false)
		var desc = "There is an empty cell with a key card. Enter in 'take' to pick up.";
		
	else
		var desc = "You are in the room that had the key card.";
	doCounter();
	display_Message(desc);
}

function loc5()
{
	if(power === false)
		var desc = "Just an ordinary empty room with a door you cannot open.";
		
	else
		var desc = "Nice work! You can open the door now as long as you have the key card!"
		 + " I hope you remembered the password! If not, go find the computer!";
	doCounter();
	display_Message(desc);

}

function loc6()
{
	var desc = "You find one of Taylor's ex-boyfriends crying in a fettle position.";
	doCounter();
	display_Message(desc);
}

function loc7()
{
	if(doYouHaveMJ === false)
		var desc = "Pop star Michael Jackson is in a cell. He is alive after all and says " +
		"he knows how to turn on the power. If you have the key enter in 'unlock' to free MJ.";
		
	else
		var desc = "You are back where you found Michael.";
	doCounter();
	display_Message(desc);
}

function loc8()
{
	var desc = "You find Selena Gomez locked up in a cell. I thought they were friends?";
	doCounter();
	display_Message(desc);
}

function loc9()
{	
	if(doYouHaveMJ === false)
		var desc = "This is the power room. You need Michael to turn on the power.";
	
	else
		var desc = "You are back in the power room. The power is on! Go to the computer!";
	doCounter();
	display_Message(desc);
}

function loc10()
{
	var desc = "Congratulations! You have made it to the end of the game! Enter in the " +
	"password to defeat Taylor and release her new album to the world for free!";
	
	doCounter();
	display_Message(desc);



}