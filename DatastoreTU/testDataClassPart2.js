




var orderByError;


function orderByAscendingTestDateValues_Btree(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7  !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDateValues_Btree(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1  !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDateValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDateValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDateValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDateValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDateValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDateValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestStringValues_Btree(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestStringValues_Btree(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestStringValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestStringValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestStringValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestStringValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestStringValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestStringValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestLongValues_Btree(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestLongValues_Btree(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestLongValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.1";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.2";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.3";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.4";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.5";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.6";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.7";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.8";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.9";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.10";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.00";
    }
};
function orderByDescendingTestLongValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestLongValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestLongValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestLongValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestLongValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
	    case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((3!== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((6!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((1!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((2!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDurationValues_BTree(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
//orderByAscendingTestByteValues_Btree
//orderByAscendingTestByteValues_Cluster
//orderByDescendingTestByteValues_Btree
//orderByDescendingTestByteValues_Cluster
function orderByAscendingTestDurationValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDurationValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDurationValues_BTree(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDurationValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDurationValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestNumberValues_BTree(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestNumberValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((8!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestNumberValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestNumberValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestNumberValues_BTree(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestNumberValues_Cluster(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((9!== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestNumberValues_Keywords(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestNumberValues_Automatic(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7,thisArg.ID , "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError=="")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((10 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((9 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 9:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
		 case 10:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");testOrderBy_TypeDurationAsc_ClusterIndexedAttribute
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
var testCase = {
    name: "Datastore test(Part2)",
    
        _should: {
        ignore: {
        }
    },
	// Tests of indexed attributes
	//normal tests
	testOrderBy_TypeStringAsc_BTreeIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cstring_Btree asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeStringDesc_BTreeIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cstring_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestStringValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeStringAsc_ClusterIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cstring_Cluster asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeStringDesc_ClusterIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cstring_Cluster desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestStringValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeStringAsc_KeywordsIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cstring_Keywords asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeStringDesc_KeywordsIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cstring_Keywords desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestStringValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeStringAsc_AutomaticIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cstring_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeStringDesc_AutomaticIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cstring_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestStringValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//type Long
	testOrderBy_TypeLongAsc_BTreeIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('clong_Btree asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestLongValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeLongDesc_BTreeIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('clong_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestLongValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeLongAsc_ClusterIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('clong_Cluster asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestLongValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeLongDesc_ClusterIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('clong_Cluster desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestLongValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeLongAsc_KeywordsIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('clong_Keywords asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestLongValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeLongDesc_KeywordsIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('clong_Keywords desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestLongValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeLongAsc_AutomaticIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('clong_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestLongValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeLongDesc_AutomaticIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('clong_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestLongValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//type Date
	testOrderBy_TypeDateAsc_BTreeIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cdate_Btree asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDateDesc_BTreeIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cdate_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeDateAsc_ClusterIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cdate_Cluster asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDateDesc_ClusterIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cdate_Cluster desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeDateAsc_KeywordsIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cdate_Keywords asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDateDesc_KeywordsIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cdate_Keywords desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeDateAsc_AutomaticIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cdate_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDateDesc_AutomaticIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cdate_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDateValues_Btree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//type Duration
		testOrderBy_TypeDurationAsc_BTreeIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cduration_Btree asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDurationValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDurationDesc_BTreeIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cduration_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDurationValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeDurationAsc_ClusterIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cduration_Cluster asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDurationValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDurationDesc_ClusterIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cduration_Cluster desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDurationValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeDurationAsc_KeywordsIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cduration_Keywords asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDurationValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDurationDesc_KeywordsIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cduration_Keywords desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDurationValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeDurationAsc_AutomaticIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cduration_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDurationDesc_AutomaticIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cduration_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//type Byte
	testOrderBy_TypeByteAsc_BTreeIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cbyte_Btree asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeByteDesc_BTreeIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cbyte_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeByteAsc_AutomaticIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cbyte_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeByteDesc_AutomaticIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cbyte_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//type Word
	testOrderBy_TypeWordAsc_BTreeIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cword_Btree asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeWordDesc_BTreeIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cword_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeWordAsc_ClusterIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cword_Cluster asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeWordDesc_ClusterIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cword_Cluster desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeWordAsc_KeywordsIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cword_Keywords asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeWordDesc_KeywordsIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cword_Keywords desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_TypeWordAsc_AutomaticIndexedAttribute: function() {
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cword_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeWordDesc_AutomaticIndexedAttribute: function() {
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cword_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
   //second param case sensivity
    testOrderBy_AscParamCaseSensivity_BTreeIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Btree Asc"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Btree Asc");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_AscParamCaseSensivity_ClusterIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Cluster Asc"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Cluster Asc");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_AscParamCaseSensivity_KeywordsIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Keywords Asc"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Keywords Asc");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_AscParamCaseSensivity_AutomaticIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Automatic Asc"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Automatic Asc");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_DescParamCaseSensivity_BTreeIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Btree DESC"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Btree DESC");
        orderByError = "";
        entityColAsc.forEach(orderByDescendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_DescParamCaseSensivity_ClusterIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Cluster DESC"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Cluster DESC");
        orderByError = "";
        entityColAsc.forEach(orderByDescendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_DescParamCaseSensivity_KeywordsIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Keywords DESC"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Keywords DESC");
        orderByError = "";
        entityColAsc.forEach(orderByDescendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_DescParamCaseSensivity_AutomaticIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Automatic DESC"), "Syntax failed : ds.MyClass1.orderBy('cnum_Btree','Asc').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Automatic DESC");
        orderByError = "";
        entityColAsc.forEach(orderByDescendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Same param twice Asc
    testOrderBy_SameAttributeTwiceAsc_BTreeIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Btree,cnum_Btree'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Btree,cnum_Btree').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cnum_Btree asc,cnum_Btree asc');
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_BTreeIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Btree, ds.MyClass_IndexedAttributes.cnum_Btree), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Btree, ds.MyClass1.cnum_Btree).");
		orderByError = "";
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Btree, 'asc', ds.MyClass_IndexedAttributes.cnum_Btree, 'asc');
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_ClusterIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Cluster,cnum_Cluster'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Cluster,cnum_Cluster').");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cnum_Cluster asc,cnum_Cluster asc');
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_ClusterIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Cluster, ds.MyClass_IndexedAttributes.cnum_Cluster), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Cluster, ds.MyClass1.cnum_Cluster).");
        orderByError = "";
		var entityColAsc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Cluster, 'asc', ds.MyClass_IndexedAttributes.cnum_Cluster, 'asc');
        entityColAsc.forEach(orderByAscendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_KeywordsIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Keywords,cnum_Keywords'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Keywords,cnum_Keywords').");

        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cnum_Keywords asc,cnum_Keywords asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_KeywordsIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Keywords, ds.MyClass_IndexedAttributes.cnum_Keywords), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Keywords, ds.MyClass1.cnum_Keywords).");

        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Keywords, 'asc', ds.MyClass_IndexedAttributes.cnum_Keywords, 'asc');
		orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_AutomaticIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Automatic,cnum_Automatic'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Automatic,cnum_Automatic').");

        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy('cnum_Automatic asc,cnum_Automatic asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceAsc_AutomaticIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Automatic, ds.MyClass_IndexedAttributes.cnum_Automatic), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Automatic, ds.MyClass1.cnum_Automatic).")
        
		var entityColAsc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Automatic, 'asc', ds.MyClass_IndexedAttributes.cnum_Automatic, 'asc');
		orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//Same param twice Desc
    testOrderBy_SameAttributeTwiceDesc_BTreeIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Btree,cnum_Btree'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Btree,cnum_Btree').");
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cnum_Btree desc,cnum_Btree desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_SameAttributeTwiceDesc_BTreeIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Btree, ds.MyClass_IndexedAttributes.cnum_Btree), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Btree, ds.MyClass1.cnum_Btree).");
		
        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Btree, 'desc', ds.MyClass_IndexedAttributes.cnum_Btree, 'desc');

        entityColDesc.forEach(orderByDescendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceDesc_ClusterIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Cluster,cnum_Cluster'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Cluster,cnum_Cluster').");

        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cnum_Cluster desc,cnum_Cluster desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceDesc_ClusterIndexedAttribute_AttributeList: function() {
   
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Cluster, ds.MyClass_IndexedAttributes.cnum_Cluster), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Cluster, ds.MyClass1.cnum_Cluster).");

        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Cluster, 'desc', ds.MyClass_IndexedAttributes.cnum_Cluster, 'desc');

        entityColDesc.forEach(orderByDescendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceDesc_KeywordsIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Keywords,cnum_Keywords'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Keywords,cnum_Keywords').");

        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cnum_Keywords desc,cnum_Keywords desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	testOrderBy_SameAttributeTwiceDesc_KeywordsIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Keywords, ds.MyClass_IndexedAttributes.cnum_Keywords), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Keywords, ds.MyClass1.cnum_Keywords).");

        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Keywords, 'desc', ds.MyClass_IndexedAttributes.cnum_Keywords, 'desc');

        entityColDesc.forEach(orderByDescendingTestNumberValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceDesc_AutomaticIndexedAttribute: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy('cnum_Automatic,cnum_Automatic'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum_Automatic,cnum_Automatic').");

        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy('cnum_Automatic desc,cnum_Automatic desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_SameAttributeTwiceDesc_AutomaticIndexedAttribute_AttributeList: function() {
        Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Automatic, ds.MyClass_IndexedAttributes.cnum_Automatic), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum_Automatic, ds.MyClass1.cnum_Automatic).");

        var entityColDesc = ds.MyClass_IndexedAttributes.orderBy(ds.MyClass_IndexedAttributes.cnum_Automatic, 'desc', ds.MyClass_IndexedAttributes.cnum_Automatic, 'desc');

        entityColDesc.forEach(orderByDescendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//asc is default value
	testOrderBy_AscIsDefaultValueOfDataClass_BtreeIndexation: function() {
		Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Btree"), "Syntax failed : orderBy (Btree): default kind of sorting fail.");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Btree");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_BTree);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
	},
	testOrderBy_AscIsDefaultValueOfDataClass_ClusterIndexation: function() {
		Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Cluster"), "Syntax failed : orderBy (Cluster): default kind of sorting fail.");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Cluster");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Cluster);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
	},
	testOrderBy_AscIsDefaultValueOfDataClass_KeywordsIndexation: function() {
		Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cstring_Keywords"), "Syntax failed : orderBy (Keywords): default kind of sorting fail.");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cstring_Keywords");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues_Keywords);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
	},
	testOrderBy_AscIsDefaultValueOfDataClass_AutomaticIndexation: function() {
		Y.Assert.isObject(ds.MyClass_IndexedAttributes.orderBy("cnum_Automatic"), "Syntax failed : orderBy (Automatic): default kind of sorting fail.");
        var entityColAsc = ds.MyClass_IndexedAttributes.orderBy("cnum_Automatic");
        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues_Automatic);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
	},
	//tests of searching in indexed attributes
	//test query: Array of bytes with placeholders
	testQuery_ArrayOfBytes_BtreeIndexation: function() {
		var message = "";
		var array = [3,0,7] ;
		var coll = ds.MyClass_IndexedAttributes.query("cbyte_Btree in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].cbyte_Btree != "3" && coll[i].cbyte_Btree != "0" && coll[i].cbyte_Btree != "7" )
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection) ";
		}
		if(message != "" )
			Y.Assert.fail("query method with indexed attributes of type byte in an array and placeholders fail "+message);
	},
	//test query: Array of durations with placeholders
	testQuery_ArrayOfDurations_BtreeIndexation: function() {
		var message = "";
		var array = [2,5,3] ;
		var coll = ds.MyClass_IndexedAttributes.query("cduration_Btree in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].cduration_Btree != "2" && coll[i].cduration_Btree != "5" && coll[i].cduration_Btree != "3" )
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection) ";
		}
		if(message != "" )
			Y.Assert.fail("query method with indexed attributes of type duration in an array and placeholders fail "+message);
	},
	//test query: Array of longs with placeholders
	testQuery_ArrayOfLongsAndPlaceholders: function() {
		var message = "";
		var array = [5,0,-5000,7] ;
		var coll = ds.MyClass_IndexedAttributes.query("clong_Btree in :1",array);
		if(coll.length == 2)
		{
			for(var i = 0 ; i<2 ; i++ )
			{
				if(coll[i].clong_Btree != "0" && coll[i].clong_Btree != "7")
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection) ";
		}
		if(message != "" )
			Y.Assert.fail("query method with indexed attributes of type long in an array and placeholders fail "+message);
	},
	//test query: Array of numbers with placeholders
	testQuery_ArrayOfNumbersAndPlaceholders: function() {
		var message = "";
		var array = [0,9,3];
		var coll = ds.MyClass_IndexedAttributes.query("cnum_Btree in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].cnum_Btree != "0" && coll[i].cnum_Btree != "9" && coll[i].cnum_Btree != "3" )
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection) ";
		}
		if(message != "" )
			Y.Assert.fail("query method with indexed attributes of type number in an array and placeholders fail "+message);
	},
	//test query: Array of strings with placeholders
	testQuery_ArrayOfStingsAndPlaceholders: function() {
		var message = "";
		var array = ['a','é','tir'] ;
		var coll = ds.MyClass_IndexedAttributes.query("cstring_Btree in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].cstring_Btree != "a" && coll[i].cstring_Btree != "é" && coll[i].cstring_Btree != "tir" )
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection) ";
		}
		if(message != "" )
			Y.Assert.fail("query method with string array and placeholders fail "+message);
	},
	//test query: Array of strings with placeholders
	testQuery_ArrayOfStings2AndPlaceholders: function() {
		var message = "";
		var array = ["a","é","tir"] ;
		var coll = ds.MyClass_IndexedAttributes.query("cstring_Btree in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].cstring_Btree != "a" && coll[i].cstring_Btree != "é" && coll[i].cstring_Btree != "tir" )
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection) ";
		}
		if(message != "" )
			Y.Assert.fail("query method with string array and placeholders fail "+message);
	},
	//------------------------------------
	//Events
	testEvents_onInit_Dataclass: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee1();
    	var j = ds.Flags.length;
    	var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onInit event has not been launched. "+s);
    },
	testEvents_onInitWithParameter_Dataclass: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee1({
			nom:	"hello"
		});
    	var j = ds.Flags.length;
    	var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onInit event has not been launched. "+s);
    },
	testEvents_onInitByMethod_Dataclass: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = ds.Employee1.createEntity();
    	var j = ds.Flags.length;
    	var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onInit event has not been launched. "+s);
    },
    testEvents_onLoad_Dataclass: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employees = ds.Employee1.query("ID < 10");
    	var myEntity = employees[0];
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onLoad_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onLoad event has not been launched. "+s);
    },
	testEvents_onValidate_Dataclass: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee1({nom:"entity #"+(i+1)});
    	myEntity.save();
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onValidate_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onValidate event has not been launched. "+s);
    },
	testEvents_onSave_Dataclass: function() {
    	var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee1({nom:"entity #"+(i+1)});
    	myEntity.save();
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSave_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onSave event has not been launched. "+s);
    },
	testEvents_orderOfExecutionOfOnValidateANDonSave_Dataclass: function() {
    	var isGood = true;
		var i = ds.Flags.length;
    	var myEntity = new ds.Employee1({nom:"entity #"+(i+1)});
    	myEntity.save();
    	var j = ds.Flags.length;
		var sav;
		var val;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSave_DataClass_Only" )
					sav = e.ID;
				else if(e.event == "onValidate_DataClass_Only" )
					val = e.ID;
			}
		if(val > sav)
			Y.Assert.fail("onSave event has been launched before onValidate");
    },
	testEvents_onRemove_Dataclass: function() {
		var isGood = true;
		var i = ds.Flags.length;
		new ds.Employee1({nom:"entity6"}).save();
    	var myEntity = ds.Employee1.find("nom = entity6");
    	myEntity.remove();
    	var j = ds.Flags.length;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onRemove_DataClass_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onRemove event has not been launched. "+s);
    },
    testEvents_onRestrictingQuery_allMethod_Dataclass: function() {
		var myCollection = ds.Employee1.all();
		var nonExistentEntity = myCollection.find("ID = 1"); //onRestrinctingQuery of this class is: return ds.Employee1.query("ID > 1")
		if(nonExistentEntity != null)
			Y.Assert.fail("onRestrictingQuery event does not work with all() method.");
    },
    testEvents_onRestrictingQuery_findMethod_Dataclass: function() {
		var nonExistentEntity = ds.Employee1.find("ID = 1"); //onRestrinctingQuery of this class is: return ds.Employee1.query("ID > 1")
		if(nonExistentEntity != null)
			Y.Assert.fail("onRestrictingQuery event does not work with find() method.");
    },
	testEvents_onRestrictingQuery_queryMethod_Dataclass: function() {
		var nonExistentEntity = ds.Employee1.query("ID = 1"); //onRestrinctingQuery of this class is: return ds.Employee1.query("ID > 1")
		if(nonExistentEntity.length != 0)
			Y.Assert.fail("onRestrictingQuery event does not work with query() method.");
    },
	//Only attribute has events	
	testEvents_onInit_Attribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee2();
    	var j = ds.Flags.length;
    	var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onInit event has not been launched. "+s);
    },
	testEvents_onInitWithParameter_Attribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee2({
			nom:	"hello"
		});
    	var j = ds.Flags.length;
    	var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onInit event has not been launched. "+s);
    },
	testEvents_onInitByMethod_Attribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = ds.Employee2.createEntity();
    	var j = ds.Flags.length;
    	var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onInit event has not been launched. "+s);
    },
	testEvents_onLoad_Attribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employees = ds.Employee2.query("ID < 5");
    	var myName = employees[0].nom;
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onLoad_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onLoad event has not been launched. "+s);
    },
	testEvents_onSet_Attribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employee = ds.Employee2.find("ID = 2");
		employee.nom = "entity #2 bis";
		employee.save();
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSet_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onLoad event has not been launched. "+s);
    },
	testEvents_onSetWithouSaving_Attribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employee = ds.Employee2.find("ID = 2");
		employee.nom = "entity #2 bis bis";
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSet_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onLoad event has not been launched. "+s);
    },
	testEvents_onValidate_Dataclass: function() {
		var isGood = false;
    	var i = ds.Flags.length;
		var n = ds.Employee2.length;
    	var myEntity = new ds.Employee2({nom:"entity #"+(n+1)});
    	myEntity.save();
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onValidate_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onValidate event has not been launched. "+s);
    },
	testEvents_onSave_Dataclass: function() {
    	var isGood = false;
    	var i = ds.Flags.length;
		var n = ds.Employee2.length;
    	var myEntity = new ds.Employee2({nom:"entity #"+(n+1)});
    	myEntity.save();
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSave_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onSave event has not been launched. "+s);
    },
	testEvents_orderOfExecutionOfOnValidateANDonSave_Dataclass: function() {
    	var isGood = true;
		var i = ds.Flags.length;
		var n = ds.Employee2.length;
    	var myEntity = new ds.Employee2({nom:"entity #"+(n+1)});
    	myEntity.save();
    	var j = ds.Flags.length;
		var sav;
		var val;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSave_Attribute_Only" )
					sav = e.ID;
				if(e.event == "onValidate_Attribute_Only" )
					val = e.ID;
			}
		if(val > sav)
			Y.Assert.fail("onSave event has been launched before onValidate");
    },
	testEvents_onRemove_Dataclass: function() {
		var isGood = true;
		var i = ds.Flags.length;
		new ds.Employee2({nom:"entity6"}).save();
    	var myEntity = ds.Employee2.find("nom = entity6");
    	myEntity.remove();
    	var j = ds.Flags.length;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onRemove_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("onRemove event has not been launched. "+s);
    }, 
    testEvents_onInit_DataclassWithAttribute: function() {
		var isGood = true;
		var i = ds.Flags.length;
    	var myEntity = new ds.Employee3();
    	var j = ds.Flags.length;
		var att;
		var dc;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_Attribute_DataClass" )
					att = e.ID;
				else if(e.event == "onInit_DataClass_Attribute" )
					dc = e.ID;
			}
		if(att < dc)
			Y.Assert.fail("Dataclass's onInit event has been launched before attribute's onInit event");
    },
	testEvents_onInitWithParameter_DataclassWithAttribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = new ds.Employee3({
			nom:	"hello"
		});
    	var j = ds.Flags.length;
		var att;
		var dc;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_Attribute_DataClass" )
					att = e.ID;
				else if(e.event == "onInit_DataClass_Attribute" )
					dc = e.ID;
			}
		if(att < dc)
			Y.Assert.fail("Dataclass's onInit event has been launched before attribute's onInit event");
    },
	testEvents_onInitByMethod_DataclassWithAttribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var myEntity = ds.Employee3.createEntity();
    	var j = ds.Flags.length;
		var att;
		var dc;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onInit_Attribute_DataClass" )
					att = e.ID;
				else if(e.event == "onInit_DataClass_Attribute" )
					dc = e.ID;
			}
		if(att < dc)
			Y.Assert.fail("Dataclass's onInit event has been launched before attribute's onInit event");
    },
	testEvents_onLoad_DataclassWithAttribute: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employees = ds.Employee3.query("ID < 5");
    	var myString = employees[0].nom;
    	var j = ds.Flags.length;
		var att;
		var dc;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onLoad_Attribute_DataClass" )
					att = e.ID;
				else if(e.event == "onLoad_DataClass_Attribute" )
					dc = e.ID;
			}
		if(att < dc)
			Y.Assert.fail("Dataclass's onLoad event has been launched before attribute's onLoad event");
    },
	testEvents_onSet_SetFromAnOtherEvent: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employees = ds.Employee1.query("ID < 10");
    	var myEntity = employees[0];
    	var j = ds.Flags.length;
		var s = "";
		s = "["+i+","+j+"]";
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSet_Attribute_Only" )
					{
						isGood = true;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("external onSet event has not been launched. "+s);
    },
	testEvents_OderOFonSetANDonLoad: function() {
		var isGood = false;
    	var i = ds.Flags.length;
    	var employee= ds.Employee1.find("ID = 2");
    	var j = ds.Flags.length;
		var onset;
		var onload;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSet_Attribute_Only" )
					onset = e.ID;
				else if(e.event == "onLoad_Attribute_Only" )
					onload = e.ID;
			}
		if(onset < onload)
			Y.Assert.fail("Dataclass's onLoad event has been launched before attribute's onLoad event");
    },
	testEvents_RefusingOnValidate: function() {
		var isGood = true;
    	var i = ds.RefuseEvent.length;
    	var employee = new ds.RefuseEvent({nom:"Refusing_onValidate",cbool:true});
		try
		{
			employee.save();
		}
		catch(err)
		{
		}
    	var j = ds.RefuseEvent.length;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onValidate_RefuseOnValidate" )
					{
						isGood = false;
						break;
					}
			}
		if(!isGood)
			Y.Assert.fail("Refusing validation does not work. "+i+" "+j);
	},
	testEvents_RefusingOnValidate_OnSave: function() {
		var isGood = true;
    	var i = ds.RefuseEvent.length;
    	var employee = new ds.RefuseEvent({nom:"Refusing_onValidate",cbool:true});
		try
		{
			employee.save();
		}
		catch(err)
		{
		}
    	var j = ds.RefuseEvent.length;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onValidate_RefuseOnValidate" )
					{
						isGood = false;
						break;
					}
			}
		if(isGood)
			for(var u = i+1; u <= j; u++)
				{
					var e = ds.Flags.find("ID = "+u);
					if(e.event == "onSave_RefuseOnSave" )
						{
							isGood = false;
							break;
						}
				}
		else
			Y.Assert.fail("OnSave event has been lunched while OnValidate has been refused. "+i+" "+j);
	},
	testEvents_RefusingOnSave_WithoutOnValidate: function() {
		var isGood = true;
		var n = ds.OnSaveNoValidation.length;
    	var i = ds.Flags.length;
    	var employee = new ds.OnSaveNoValidation({nom:"Refusing_onSave",cbool:true});
		try
		{
			employee.save();
		}
		catch(err)
		{
		}
    	var j = ds.Flags.length;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSave_withoutOnValidation" )
					{
						isGood = false;
						break;
					}
			}
		if(!isGood || ds.OnSaveNoValidation.length > n)
			Y.Assert.fail("Refusing save does not work whene we don't have validation. "+i+" "+j);
	},
	testEvents_RefusingOnSave_WithOnValidate: function() {
		var isGood = true;
    	var i = ds.Flags.length;
		ds.RefuseEvent.remove();
    	var employee = new ds.RefuseEvent({nom:"Refusing_onSave",cbool:true});
		try
		{
			employee.save();
		}
		catch(err)
		{
		}
    	var j = ds.Flags.length;
		for(var u = i+1; u <= j; u++)
			{
				var e = ds.Flags.find("ID = "+u);
				if(e.event == "onSave_RefuseOnSave" )
					{
						isGood = false;
						break;
					}
			}
		if(!isGood || ds.RefuseEvent.length > 0)
			Y.Assert.fail("Refusing save does not work whene the validation passed. "+i+" "+j);
	},
	testEvents_RefusingOnRemove: function() {
		var isGood = true;
		try
		{
			ds.OnSaveNoValidation.remove();
		}
		catch(err)
		{
		}
		if(ds.OnSaveNoValidation.length == 0)
			Y.Assert.fail("Refusing save does not work whene we don't have validation. "+i+" "+j);
	},
    
    // Tests on extended DataClasses (work in progress):

    testExtends_AddRelationAttribute: function() {
        try
        {
            var myRelated = ds.Related.createEntity();
            myRelated.name = 'related entity';
            myRelated.save();

            var myChild = ds.Child.createEntity();
            myChild.name = 'child extends parent';
            myChild.related = myRelated;
            myChild.save();
        }
        catch (e)
        {
            Y.Assert.fail("Cannot save extended entity: " + e);
        }

        Y.Assert.areSame('related entity', myChild.related.name);
    }
};