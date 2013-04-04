/*
* This file is part of Wakanda software, licensed by 4D under
*  (i) the GNU General Public License version 3 (GNU GPL v3), or
*  (ii) the Affero General Public License version 3 (AGPL v3) or
*  (iii) a commercial license.
* This file remains the exclusive property of 4D and/or its licensors
* and is protected by national and international legislations.
* In any event, Licensee's compliance with the terms and conditions
* of the applicable license constitutes a prerequisite to any use of this file.
* Except as otherwise expressly stated in the applicable license,
* such license does not include any other license or rights on this file,
* 4D's and/or its licensors' trademarks and/or other proprietary rights.
* Consequently, no title, copyright or other proprietary rights
* other than those specified in the applicable license is granted.
*/
var orderByError;

function orderByAscendingTestNumberValues(thisArg, iterator)
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
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
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

function orderByDescendingTestNumberValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(11, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 2:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID && 1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID && 1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID && 4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(10, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID && 4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByAscendingTestStringValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByDescendingTestStringValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 2:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 4:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 5:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 6:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 7:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 8:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByAscendingTestDurationValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByDescendingTestDurationValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 2:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 3:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 4:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 5:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 6:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 7:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 8:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDateValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByDescendingTestDateValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 2:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 3:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 4:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 5:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 6:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 7:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 8:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByAscendingTestUUIDValues(thisArg, iterator)
{
   switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";      
          break;
        case 2:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 3:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 4:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 5:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 6:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 7:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        case 8:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestUUIDValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 2:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 3:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 5:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 6:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 7:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 8:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByDescendingTestNullValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";  
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestNullValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTwoAttributsValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";    
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 3:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 4:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 5:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 6:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 7:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        case 8:
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
function orderByDescendingTwoAttributsValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 2:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 3:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 6:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 7:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 8:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByTwoAttributsValuesWithAscFirstParamAndDescSecondParam(thisArg, iterator) {
    switch (iterator + 1) {
        case 1:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 2:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 3:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 6:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 7:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 8:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByTwoAttributsValuesWithDescFirstParamAndAscSecondParam(thisArg, iterator) {
    switch (iterator + 1) {
        case 1:
            //Y.Assert.areSame(8, thisArg.ID, "orderBy failed.");
            if ((8 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 2:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((5 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 3:
            //Y.Assert.areSame(5, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 4:
            //Y.Assert.areSame(3, thisArg.ID, "orderBy failed.");
            if ((4 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 5:
            //Y.Assert.areSame(4, thisArg.ID, "orderBy failed.");
            if ((3 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 6:
            //Y.Assert.areSame(6, thisArg.ID, "orderBy failed.");
            if ((6 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 7:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        case 8:
            //Y.Assert.areSame(7, thisArg.ID, "orderBy failed.");
            if ((7 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByAscendingTestAscValues(thisArg, iterator)
{
    switch(iterator+1)
    {
        case 1:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed.";     
          break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
          break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestAscValues(thisArg, iterator)
{
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 2:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByAscendingTestDescValues(thisArg, iterator) {
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 2:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};
function orderByDescendingTestDescValues(thisArg, iterator) {
    switch (iterator+1) {
        case 1:
            //Y.Assert.areSame(2, thisArg.ID, "orderBy failed.");
            if ((2 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        case 2:
            //Y.Assert.areSame(1, thisArg.ID, "orderBy failed.");
            if ((1 !== thisArg.ID) && orderByError == "")
                orderByError = "orderBy failed."; 
            break;
        default:
            //Y.Assert.fail("orderBy failed.");
            if (orderByError == "")
                orderByError = "orderBy failed.";
    }
};

function orderByAscendingEmptyValues(thisArg, iterator) {
    orderByError = "orderBy failed.";
};

function orderByDescendingEmptyValues(thisArg, iterator) {
    orderByError = "orderBy failed.";
};

function compareObject(obj1, obj2)
{
	var ok = true;
	var props = [];
	var props1 = [];
	for( var prop in obj1)
	{
		props.push(prop);
	}
	for( var prop in obj2)
	{
		props1.push(prop);
	}
	if(props.length==props1.length)
	{
		for(var i = 0; i< props.length ; i++)
		{
			if(obj1[props[i]]!=obj2[props1[i]])
			{
				ok = false;
				break;
			}
		}
	}
	
	return ok;
};

var testCase = {
    name: "Datastore test",

    _should: {
        ignore: {
			testOrderBy_TypeImage: true, //TBD
			testToArray_TypeImage: true,//TBD
			testToArray_TypeBlob: true,//TBD
			testToArray_TypeUuid: true,//TBD
			testFromArray_TypeImage: true,//TBD
			testFromArray_TypeBlob: true,//TBD
			testFromArray_TypeUuid: true,//TBD
            testLength_OneBillionRecords: true,
			testLength_EntityCollectionOneBillionRecords: true,
            testAll_OneBillionRecords: true,
            testCompute_SquareSum: true,
            testCompute_SquareSumOfDataClassWithDataSumGreaterThan2147483647: true,
			testCompute_ExistenceOfSquareSumPropertyInReturnedObject: true,
            testCreateEntity_DataClassWithoutAttributes: true,
            testCreateEntityCollection_AddBadEntity: true, //L.E asks me to deactivate it 
            testDistinctValues_DuplicateNullAndNotNullData: true, //Waiting for L.R implementation
        }
    },

	setUp : function () {
		if (os.isWindows) {
			// On ignore le test suivant sous Windows :
		}
		if (os.isLinux) {
			// On ignore le test suivant sous Linux :
			// this._should.ignore.testToArray_DataClassWithImageAttribute_ValuesShouldNotBeNull = true;
			// this._should.ignore.testToArray_DatastoreWithImageAttribute = true;
			// this._should.ignore.testFromArray_ArrayWhithDataContainingImages = true;
		}
    },
	
    //Existence!
    testDataClassExistency: function() {
        Y.Assert.isObject(ds.MyClass1, "Existence failed.");
    },
    //Syntax Call without ds
    testDataClassCallWithoutDS: function() {
	var isGood = true;
	try
	{
		MyClass1;
		isGood = false;
	}
	catch(e)
	{
	}
	if(!isGood)
        Y.Assert.fail("It's necessary to use the ds object based notation for a local space dataclass.");
    },
    //Syntax Call with ambiguity
    testDataClassCallWithAmbiguity: function() {
        var MyClass1 = 0;
        Y.Assert.isNumber(MyClass1, "Syntax call with ambiguity failed.");
    },
    //Case sensitivity
    testDataClassCallCaseSensivity: function() {
        Y.Assert.isUndefined(ds.MYCLASS1, "Case sensivity failed.");
    },
    //Inexistance
    testCallInexistantDataClass: function() {
        Y.Assert.isUndefined(ds.MyInexistantClass1, "Inexistance failed.");
    },
    //Existence
    testLength_ExistenceOnDataClass: function() {
        Y.Assert.isNumber(ds.MyClass1.length, "Existence failed.");
    },
    //empty Data class
    testLength_DataClassWithoutData: function() {
        Y.Assert.areSame(0, ds.MyEmptyClass.length, "length of empty Data class failed.");
    },
    //Data class with data
    testLength_DataClassWithData: function() {
        Y.Assert.areSame(11, ds.MyClass1.length, "length of Data class failed.");
    },
    //Max length supported
    testLength_OneBillionRecords: function() {
        Y.Assert.fail("The test with field with about 1.000.000.000 records (maximum of records) will be done soon");
        //Y.Assert.isTrue(ds.MyMaxRecords.length === ,"Max length supported failed.");
    },
	//length: existence for entityCollection
    testLength_ExistenceOnEntityCollection: function() {
		var myCollection = ds.MyClass1.createEntityCollection();
        Y.Assert.isNumber(myCollection.length, "Existence of length method for EntityCollection failed.");
    },
    //length: empty Collection
    testLength_EntityCollectionWithoutData: function() {
		var myEmptyCollection = ds.MyEmptyClass.createEntityCollection();
        Y.Assert.areSame(0, myEmptyCollection.length, "length of empty entity collection failed.");
    },
    //length: collection with data
    testLength_EntityCollectionWithData: function() {
		var myCollection = ds.MyClass1.createEntityCollection();
		for(var i = 1;i<12;i++)
		{
			if(i!=9){
				var entity = ds.MyClass1.find("ID = "+i);
				myCollection.add(entity);
			}
		}
        Y.Assert.areSame(10, myCollection.length, "length of entity collection failed.");
    },
    //Max length supported for collection
    testLength_EntityCollectionOneBillionRecords: function() {
        Y.Assert.fail("The test with field with about 1.000.000.000 records (maximum of records) will be done soon (for EntityCollection)");
    },
    //Existence
    testAll_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.all(), "Existence failed.");
    },
    //empty Data class
    testAll_DataClassWithoutData: function() {
        Y.Assert.areSame(0, ds.MyEmptyClass.all().length, "all() of empty Data class failed.");
    },
    //Data class  with data
    testAll: function() {
        Y.Assert.areSame(11, ds.MyClass1.all().length, "all() of Data class failed.");
    },
    //max record supported
    testAll_OneBillionRecords: function() {
        Y.Assert.fail("The test with field with about 1.000.000.000 records (maximum of records) will be done soon");
        //Y.Assert.isTrue(ds.MyMaxRecords.all().length === ,"Max length supported failed.");
    },

    //Existence
    testAverage_ExistenceOnDataClass: function() {
        Y.Assert.isNumber(ds.MyClass1.average('cnum'), "Existence (class) failed.");
    },
    //Existence on collection
    testAverage_ExistenceOnCollection: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum=2");
        var entity2 = ds.MyClass1.find("cnum=8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.isNumber(myCollection.average('cnum'), "Existence (collection) failed.");
    },
    //Syntax
    //empty param
    testAverage_DataClassAttributeAsEmptyString: function() {
    	var isGood = true;
    	try
    	{
    		ds.MyClass1.average("");
    		isGood = false;
    	}
    	catch(e)
    	{
    	}
    	if(!isGood)
         	Y.Assert.fail("Syntax: ds.MyClass1.average('') should return error.");
    },
    //without first param
	//without first param
    testAverage_WithoutFirstParam: function() {
		var s = "";
		var isGood = true, isGood1 = true;
		try
		{
			ds.MyClass1.average(false);
			isGood = false;
		}
		catch(e){}
		if(!isGood){
			s+="ds.MyClass1.average(false), "; //ds.MyClass1.average(false) should not pass.
			isGood1 = false;
		}	
		isGood = true;
		try
		{
			ds.MyClass1.average(true);
			isGood = false;
		}
		catch(e){}
		if(!isGood){
			s+="ds.MyClass1.average(true), "; //ds.MyClass1.average(true) should not pass.
			isGood1 = false;
		}
		isGood = true;
		try
		{
			ds.MyClass1.average("distinct");
			isGood = false;
		}
		catch(e){}
		if(!isGood){
			s+="ds.MyClass1.average(\"distinct\") "; //ds.MyClass1.average(""distinct"") should not pass.
			isGood1 = false;
		}
		if(!isGood1)
			Y.Assert.fail(""+s+" should not pass.");
    },
    //bad field type
    //string
    testAverage_BadAttributeParamTypeString: function() {
		var isGood = true;
		try
			{
			ds.MyClass1.average("name");
			isGood = false;
			}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("Syntax: ds.MyClass1.average(string) should return error");
    },
    //date
    testAverage_BadAttributeParamTypeDate: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.average("cdate");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("Syntax : ds.MyClass1.average(date) should fail or return a result as date.");
    },
    //duration
    testAverage_BadAttributeParamTypeDuration: function() {
        Y.Assert.areSame(2,ds.MyClass1.average("cduration"), "Syntax failed : ds.MyClass1.average(duration).");
    },
    //bool
    testAverage_BadAttributeParamTypeBool: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.average("cbool");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("average method shouldn't work with bool attribute.");
    },
    //blob
    testAverage_BadAttributeParamTypeBlob: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.average("cblob");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("average method shouldn't work with blob attribute.");
    },
    //Must success
    //bad second param
    testAverage_DistinctParamWithBadValue: function() {
        Y.Assert.isNumber(ds.MyClass1.average("cnum", "other"), "Syntax failed : ds.MyClass1.average('cnum','other').");
    },
    //second param case sensivity. 
    testAverage_DistinctParamCaseSensivity: function() {
        Y.Assert.isNumber(ds.MyClass1.average("cnum", "Distinct"), "Syntax failed : ds.MyClass1.average('cnum','Distinct').");
        Y.Assert.isNumber(ds.MyClass1.average("cnum", "DISTINCT"), "Syntax failed : ds.MyClass1.average('cnum','DISTINCT').");
    },
    testAverage_SyntaxDistinctParamAsBool_true_AndDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.average("cnum", true), "Syntax failed : ds.MyClass1.average('cnum',true).");
    },
    testAverage_SyntaxDistinctParamAsBool_false_AndDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.average("cnum", false), "Syntax failed : ds.MyClass1.average('cnum',false).");
    },
    testAverage_SyntaxDistinctParamAsStringAndDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.average("cnum", "distinct"), "Syntax failed : ds.MyClass1.average('cnum','distinct').");
    },
    testAverage_SyntaxDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.average("cnum"), "Syntax failed : ds.MyClass1.average('cnum').");
    },
    testAverage_SyntaxDataClassParamAsAttribute: function() {
        Y.Assert.isNumber(ds.MyClass1.average(ds.MyClass1.cnum), "Syntax failed : ds.MyClass1.average(ds.MyClass1.cnum).");
    },

    //end syntax tests

    //link (WAK0072036 Bug Fixed test)
    testAverage_BadAttributeParamAsOtherDataClassAttribute: function() {
        var isGood = true;

        try {
            var x = ds.MyClass1.average(ds.MyClass2.cnum);
            isGood = false;
        }
        catch (e) {}
        if (!isGood)
            Y.Assert.fail("Other class attribute failed.");
        isGood = true;
        try {
            var x = ds.MyClass1.average(ds.MyClass1.clink.cnum);
            isGood = false;
        }
        catch (e) {}
        if (!isGood)
            Y.Assert.fail("Link failed.");

    },
    //Data class with attribute named 'distinct'
    testAverage_DataClassAttributeNamedDistinct: function() {
        Y.Assert.isNumber(ds.MyClass2.average("distinct"), "Data class with attribute named 'distinct' failed.");
    },

    //empty Data class 
    testAverage_DataClassWithoutData: function() {
        Y.Assert.isNull(ds.MyEmptyClass.average("cnum"), "averge of empty Data class should return null.");
    },
    //Data class with data
    testAverage_DataClassWithData: function() {
        Y.Assert.areSame(12, ds.MyClass1.average("cnum"), "average of Data class failed.");
        Y.Assert.areSame(12, ds.MyClass1.average(ds.MyClass1.cnum), "average of Data class failed.");
    },
    //Data class with data
    testAverage_DistinctAverageOfDataClassWithData: function() {
        Y.Assert.areSame(14.75, ds.MyClass1.average("cnum", "distinct"), "average of Data class failed.");
    },
    //the sum of num is > 2147483647.
    testAverage_DataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(2147483646, ds.MyClass2.average("cnum"), "average of Data class with sum > 2147483647 failed.");
    },
    //collection
    testAverage_CollectionWithData: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum=2");
        var entity2 = ds.MyClass1.find("cnum=8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.areSame(5, myCollection.average('cnum'), "average collection failed.");
    },
    //empty collection (WAK0071945 Bug)
    testAverage_CollectionWithoutData: function() {
        var myEmptyCol = ds.MyClass1.createEntityCollection();
        Y.Assert.isNull(myEmptyCol.average("cnum"),"average method for empty collection should return null.");
    },

    //Existence
    testCompute_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.compute("cnum"), "Existence (class) failed.");
        Y.Assert.isObject(ds.MyClass1.compute("cnum").cnum, "Sub object's existence (class) failed.");
    },
    //Existence on collection
    testCompute_ExistenceOnCollection: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum=2");
        var entity2 = ds.MyClass1.find("cnum=8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.isObject(myCollection.compute('cnum'), "Existence (collection) failed.");
        Y.Assert.isObject(myCollection.compute('cnum').cnum, "Sub object's existence (collection) failed.");
    },
    //returned object validity
    testCompute_ExistenceOfAveragePropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum').cnum.average, "The attribute average does not exists.");
    },
    testCompute_ExistenceOfAverageDistinctPropertyInReturnedObject: function() {
        Y.Assert.areSame(14.75,ds.MyClass1.compute('cnum',true).cnum.averageDistinct, "The attribute averageDistinct does not work.");
    },
    testCompute_ExistenceOfCountPropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum').cnum.count, "The attribute count does not exists.");
    },
    testCompute_ExistenceOfCountDistinctPropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum',true).cnum.countDistinct, "The attribute countDistinct does not exists.");
    },
    testCompute_ExistenceOfMaxPropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum').cnum.max, "The attribute max does not exists.");
    },
    testCompute_ExistenceOfMinPropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum').cnum.min, "The attribute min does not exists.");
    },
    testCompute_ExistenceOfSquareSumPropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum').cnum.square_sum, "The attribute square_sum does not exists.");
    },
    testCompute_ExistenceOfSumPropertyInReturnedObject: function() {
        Y.Assert.isNumber(ds.MyClass1.compute('cnum').cnum.sum, "The attribute sum does not exists.");
    },
    testCompute_ExistenceOfSumDistinctPropertyInReturnedObject: function() {
        Y.Assert.areSame(118,ds.MyClass1.compute('cnum',true).cnum.sumDistinct, "The attribute sumDistinct does not work.");
    },

    //Syntax
    //(WAK0071943 bug fixed)
    testCompute_SyntaxBadParamWithoutDistinction: function() {
        var b = false;
		var result = ds.MyClass1.compute('cnum').cnum;
		try{
			ds.MyClass1.compute(',');
		}catch(e)
		{
			b=true;
		}
		if(!b) Y.Assert.fail("Syntax failed :ds.MyClass1.compute(',').");
        Y.Assert.isTrue(compareObject(result, ds.MyClass1.compute('cnum,').cnum), "Syntax failed :ds.MyClass1.compute('cnum,') is not same as ds.MyClass1.compute('cnum').");
        Y.Assert.isTrue(compareObject(result, ds.MyClass1.compute(',cnum').cnum), "Syntax failed :ds.MyClass1.compute(',cnum') is not same as ds.MyClass1.compute('cnum').");
    },
	testCompute_SyntaxBadParamWithDistinction: function() {
		var b = false;
		var result = ds.MyClass1.compute('cnum',true).cnum;
		try{
			ds.MyClass1.compute(',',true);
		}catch(e)
		{
			b=true;
		}
		if(!b) Y.Assert.fail("Syntax failed :ds.MyClass1.compute(',',true).");
        Y.Assert.isTrue(compareObject(result, ds.MyClass1.compute('cnum,',true).cnum), "Syntax failed :ds.MyClass1.compute('cnum,') is not same as ds.MyClass1.compute('cnum').");
        Y.Assert.isTrue(compareObject(result, ds.MyClass1.compute(',cnum',true).cnum), "Syntax failed :ds.MyClass1.compute(',cnum') is not same as ds.MyClass1.compute('cnum').");
    },
    //bad field type
    //string
    testCompute_BadAttributeParamTypeString: function() {
		var array = ds.MyClass1.compute("name");
		if(array.name.min!="a" || array.name.max!="nine" || array.name.count!=11 )
			Y.Assert.fail("Syntax: ds.MyClass1.compute(string) fail");
    },
    //date
    testCompute_BadAttributeParamTypeDate: function() {
		var array = ds.MyClass1.compute("cdate");
		if(array.cdate.min.getTime()!= (new Date("11/30/1899")).getTime() || array.cdate.min.getTime()!= (new Date("11/30/1899")).getTime() ||	array.cdate.count!= 11)
			Y.Assert.fail("Syntax : ds.MyClass1.compute(date) fail.");
    },
    //duration
    testCompute_BadAttributeParamTypeDuration: function() {
        Y.Assert.isObject(ds.MyClass1.compute("cduration"), "Syntax failed : ds.MyClass1.compute(duration).");
		Y.Assert.areSame(23,ds.MyClass1.compute("cduration").cduration.sum,"Syntax failed : ds.MyClass1.compute(duration).cduration.sum");
		Y.Assert.areSame(2.875,ds.MyClass1.compute("cduration").cduration.average,"Syntax failed : ds.MyClass1.compute(duration).cduration.average");
		Y.Assert.areSame(0,ds.MyClass1.compute("cduration").cduration.min,"Syntax failed : ds.MyClass1.compute(duration).cduration.min");
		Y.Assert.areSame(9,ds.MyClass1.compute("cduration").cduration.max,"Syntax failed : ds.MyClass1.compute(duration).cduration.max");
		Y.Assert.areSame(8,ds.MyClass1.compute("cduration").cduration.count,"Syntax failed : ds.MyClass1.compute(duration).cduration.count");
    },
    //bool
    testCompute_BadAttributeParamTypeBool: function() {
		var isGood = true;
		var isGood1 = true;
		var isGood2 = true;
		var isGood3 = true;
		var isGood4 = true;
		try
		{
			ds.MyClass1.compute("cbool");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
		{
				var res1 = ds.MyClass1.compute("cbool").cbool.average;
				if(res1!=null)
					isGood1 = false;
				var res2 = ds.MyClass1.compute("cbool").cbool.sum;
				if(res2 != null)
					isGood4 = false;
			if(!isGood1 || !isGood4)
				Y.Assert.fail("compute (Average et sum) method shouldn't work with bool attribute.");
		}
		else
			Y.Assert.fail("compute with bool param fail.");
    },
    //blob
    testCompute_BadAttributeParamTypeBlob: function() {
		var isGood = true;
		try{
			ds.MyClass1.compute("cblob").cblob;
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("Compute with 'blob' attribut should generate exception.");
    },

    //Must success
    testCompute_SyntaxDataClassAttributeAsString: function() {
        Y.Assert.isObject(ds.MyClass1.compute('cnum'), "Syntax failed :ds.MyClass1.compute('cnum').");
        Y.Assert.isObject(ds.MyClass1.compute('cnum,clong'), "Syntax failed :ds.MyClass1.compute('cnum,cnum2').");
    },
    testCompute_SyntaxDataClassAttributeAsAttribute: function() {
        Y.Assert.isObject(ds.MyClass1.compute(ds.MyClass1.cnum), "Syntax failed :ds.MyClass1.compute(ds.MyClass1.cnum).");
        Y.Assert.isObject(ds.MyClass1.compute(ds.MyClass1.cnum, ds.MyClass1.clong), "Syntax failed :ds.MyClass1.compute(ds.myClass.cnum,ds.myClass.clong).");
    },
    testCompute_SyntaxDataClassAttributeAsStringAndAttribute: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.compute('cnum', ds.myClass1.clong);
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("Syntax :ds.MyClass1.compute('cnum',ds.myClass.clong) should fail.");
    },

    //end Syntax

    //empty param
    testCompute_DataClassAttributeAsEmptyString: function() {
		var b = false;
		try{
			ds.MyClass1.compute('');
		}catch(e)
		{
			b=true;
		}
		if(!b) Y.Assert.fail("compute empty param failed.");
    },
    //Other class attribute  (WAK0072036 Bug)
    testCompute_BadAttributeParamAsOtherDataClassAttribute: function() {
		var isGood1 = true;
		var isGood2 = true;
		var message = "";
		try
		{
			ds.MyClass1.compute(ds.MyClass2.cnum);
			isGood1 = false;
		}
		catch(e){}
		try
		{
			ds.MyClass1.compute(ds.MyClass1.clink.cnum);
			isGood2 = false;
		}
		catch(e){}
		if(!isGood1 || !isGood2)
		{
			if(!isGood1)
				message += "other class attribute";
			if(!isGood1 && !isGood2)
				message += "and";
			if(!isGood2)
				message += "Link attribute";
			Y.Assert.fail("compute with "+message+" should return error");
		}
    },
    //Inexistant attribute
    testCompute_InexistantAttributeParam: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.compute('myInexistantAttribute');
			isGood = false;
		}
		catch(e)
		{
		}
		if(!isGood)
			Y.Assert.fail("Inexistant attribute should generate exception.");
    },
    //
    testCompute_SameAttributeTwice: function() {
        Y.Assert.isObject(ds.MyClass1.compute('cnum,cnum'), "compute the same attribute twice failed : ds.MyClass1.compute('cnum,cnum').");
        Y.Assert.isObject(ds.MyClass1.compute('cnum', ds.MyClass1.cnum), "compute the same attribute twice failed : ds.MyClass1.compute('cnum', ds.MyClass1.cnum).");
        Y.Assert.isObject(ds.MyClass1.compute(ds.MyClass1.cnum, ds.MyClass1.cnum), "compute the same attribute twice failed : ds.MyClass1.compute(ds.MyClass1.cnum, ds.MyClass1.cnum).");
        Y.Assert.isObject(ds.MyClass1.compute('cnum,cnum').cnum, "compute the same attribute twice failed.");
        Y.Assert.areSame(12, ds.MyClass1.compute('cnum', ds.MyClass1.cnum).cnum.average, "compute the same attribute twice failed : ds.MyClass1.compute('cnum', ds.MyClass1.cnum).cnum.average.");
    },
    //Verify attributes calculation
    testCompute_AverageOfDataClassWithData: function() {
        Y.Assert.areSame(12, ds.MyClass1.compute('cnum').cnum.average, "compute average failed.");
    },
    testCompute_DistinctAverageOfDataClassWithData: function() {
        Y.Assert.areSame(14.75, ds.MyClass1.compute('cnum',true).cnum.averageDistinct, "compute averageDistinct failed.");
    },
    testCompute_CountOfDataClassWithData: function() {
        Y.Assert.areSame(11, ds.MyClass1.compute('cnum').cnum.count, "compute count failed.");
    },
    testCompute_DistinctCountOfDataClassWithData: function() {
        Y.Assert.areSame(8, ds.MyClass1.compute('cnum',true).cnum.countDistinct, "compute countDistinct failed.");
    },
    testCompute_MaxOfDataClassWithData: function() {
        Y.Assert.areSame(97, ds.MyClass1.compute('cnum').cnum.max, "compute max failed.");
    },
    testCompute_MinOfDataClassWithData: function() {
        Y.Assert.areSame(-2, ds.MyClass1.compute('cnum').cnum.min, "compute min failed.");
    },
    testCompute_SquareSum: function() {
        Y.Assert.areSame(205, ds.MyClass1.compute('cnum').cnum.square_sum, "compute square_sum failed.");
    },
    testCompute_SumOfDataClassWithData: function() {
        Y.Assert.areSame(132, ds.MyClass1.compute('cnum').cnum.sum, "compute sum failed.");
    },
    testCompute_DistinctSumOfDataClassWithData: function() {
        Y.Assert.areSame(118, ds.MyClass1.compute('cnum',true).cnum.sumDistinct, "compute sumDistinct failed.");
    },
    //the sum of num is > 2147483647.
    testCompute_AverageOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(2147483646, ds.MyClass2.compute("cnum").cnum.average, "compute average of Data class with sum > 2147483647 failed.");
    },
    testCompute_DistinctAverageOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(2147483646, ds.MyClass2.compute('cnum',true).cnum.averageDistinct, "compute averageDistinct with sum > 2147483647 failed.");
    },
    testCompute_MaxOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(2147483647, ds.MyClass2.compute('cnum').cnum.max, "compute max of Data class with sum > 2147483647 failed.");
    },
    testCompute_MinOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(2147483645, ds.MyClass2.compute('cnum').cnum.min, "compute min of Data class with sum > 2147483647 failed.");
    },
    testCompute_SquareSumOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(4611686014132420609, ds.MyClass2.compute('cnum').cnum.square_sum, "compute square_sum of Data class with sum > 2147483647 failed.");
    },
    testCompute_SumOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(4294967292, ds.MyClass2.compute('cnum').cnum.sum, "compute sum of Data class with sum > 2147483647 failed.");
    },
    testCompute_DistinctSumOfDataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(4294967292, ds.MyClass2.compute('cnum',true).cnum.sumDistinct, "compute sumDistinct failed.");
    },
    //empty Data class (WAK0071945 Bug: Fixed Test)
    testCompute_DataClassWithoutData: function() {
        Y.Assert.isObject(ds.MyEmptyClass.compute("cnum"), "compute of empty Data class failed.");
        Y.Assert.isObject(ds.MyEmptyClass.compute("cnum").cnum, "compute of empty Data class failed.Object do not existe.");
        Y.Assert.isNull(ds.MyEmptyClass.compute('cnum').cnum.average, "compute collection average failed.");
        Y.Assert.isNull(ds.MyEmptyClass.compute('cnum',true).cnum.averageDistinct, "compute distinct average collection failed.");
        Y.Assert.isNull(ds.MyEmptyClass.compute('cnum').cnum.max, "compute max collection failed..");
        Y.Assert.isNull(ds.MyEmptyClass.compute('cnum').cnum.min, "compute min collection failed.");
        //Y.Assert.areSame(0,myEmptyCol.compute('cnum').cnum.square_sum, "compute square sum collection failed.");
        Y.Assert.areSame(0,ds.MyEmptyClass.compute('cnum').cnum.sum, "compute sum collection failed.");
        Y.Assert.areSame(0,ds.MyEmptyClass.compute('cnum',true).cnum.sumDistinct, "compute sum distinct collection failed.");
    },
    //collection
    testCompute_ComputeCollectionWithData: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("ID=2"); //cnum = 2
        var entity2 = ds.MyClass1.find("ID=3"); //cnum = 3
        var entity3 = ds.MyClass1.find("ID=6"); //cnum = 8
        var entity4 = ds.MyClass1.find("ID=7"); //cnum = 3
        myCollection.add(entity1);
        myCollection.add(entity2);
        myCollection.add(entity3);
        myCollection.add(entity4);

        Y.Assert.areSame(4, myCollection.compute('cnum').cnum.average, "compute collection average failed.");
        Y.Assert.areSame(13 / 3, myCollection.compute('cnum',true).cnum.averageDistinct, "compute distinct average collection failed.");
        Y.Assert.areSame(8, myCollection.compute('cnum').cnum.max, "compute max collection failed..");
        Y.Assert.areSame(2, myCollection.compute('cnum').cnum.min, "compute min collection failed.");
        //Y.Assert.areSame(myCollection.compute('cnum').cnum.square_sum, "compute square sum collection failed.");
        Y.Assert.areSame(16, myCollection.compute('cnum').cnum.sum, "compute sum collection failed.");
        Y.Assert.areSame(13, myCollection.compute('cnum',true).cnum.sumDistinct, "compute sum distinct collection failed.");
    },
    //empty collection (WAK0071945 Bug)
    testCompute_CollectionWithoutData: function() {
        var myEmptyCol = ds.MyClass1.createEntityCollection();
        Y.Assert.isObject(myEmptyCol.compute("cnum").cnum, "empty collection failed.");
        Y.Assert.isNull(myEmptyCol.compute('cnum').cnum.average, "compute collection average failed.");
        Y.Assert.isNull(myEmptyCol.compute('cnum',true).cnum.averageDistinct, "compute distinct average collection failed.");
        Y.Assert.isNull(myEmptyCol.compute('cnum').cnum.max, "compute max collection failed..");
        Y.Assert.isNull(myEmptyCol.compute('cnum').cnum.min, "compute min collection failed.");
        //Y.Assert.areSame(0,myEmptyCol.compute('cnum').cnum.square_sum, "compute square sum collection failed.");
        Y.Assert.areSame(0,myEmptyCol.compute('cnum').cnum.sum, "compute sum collection failed.");
        Y.Assert.areSame(0,myEmptyCol.compute('cnum',true).cnum.sumDistinct, "compute sum distinct collection failed.");
    },
    //Existence
    testCount_ExistenceOnDataClass: function() {
        Y.Assert.isNumber(ds.MyClass1.count(), "Existence failed.");
    },
    testCount_ExistenceOnCollection: function() {
        Y.Assert.isNumber(ds.MyClass1.all().count(), "Existence failed.");
    },
    //Syntax
    //Must fails
    testCount_WithoutAttributeParam: function() {
	var isGood = true;
	var isGood1 = true;
	var message = "";
		try
		{
			ds.MyClass1.count('distinct');
			isGood = false;
		}
		catch(ee){}
		try
		{
			ds.MyClass1.count(false);
			isGood1 = false;
		}
		catch(e){}
		if(!isGood || !isGood1)
		{
			if(!isGood)
				message+="ds.MyClass1.count('distinct')";
			if(!isGood && !isGood1)
				message+=" and ";
			if(!isGood1)
				message+="ds.MyClass1.count(false)";
			Y.Assert.fail("Syntax : "+message+" should fail.");
		}
    },
    //end syntax
    testCount_DistinctParamWithBadValue: function() {
        Y.Assert.isNumber(ds.MyClass1.count('cnum', 'other'), "Syntax : ds.MyClass1.count('myAttribute','other') failed.");
        Y.Assert.isNumber(ds.MyClass1.count('cnum', ''), "Syntax : ds.MyClass1.count('myAttribute','') failed.");
    },
    testCount_DistinctParamCaseSensivity: function() {
        Y.Assert.isNumber(ds.MyClass1.count('cnum', 'Distinct'), "Syntax : ds.MyClass1.count('myAttribute','Distinct') failed.");
        Y.Assert.isNumber(ds.MyClass1.count('cnum', 'DISTINCT'), "Syntax : ds.MyClass1.count('myAttribute','DISTINCT') failed.");
    },
    testCount_WithoutParam: function() {
        Y.Assert.areSame(11, ds.MyClass1.count(), "ds.MyClass1.count() failed.");
    },
	//(WAK0072033 Bug Fixed)
    testCount_DataWithNullAndNotNullValues: function() {
        Y.Assert.areSame(6, ds.MyClass1.count('cbyte'), "data with null values failed.");
        Y.Assert.areSame(6, ds.MyClass1.all().count('cbyte'), "data with null values failed.");
    },
    testCount_AttributeParamAsString: function() {
        Y.Assert.areSame(11, ds.MyClass1.count('cnum'), "ds.MyClass1.count('myAttribute') failed.");
    },
    testCount_DistinctParamAsStringAndAttributeParamAsString: function() {
        Y.Assert.areSame(8, ds.MyClass1.count('cnum', 'distinct'), "ds.MyClass1.count('myAttribute','distinct') failed.");
    },
    testCount_DistinctParamAsBool_true_AndAttributeParamAsString: function() {
        Y.Assert.areSame(8, ds.MyClass1.count('cnum', true), "ds.MyClass1.count('myAttribute',true) failed.");
    },
    testCount_DistinctParamAsBool_true_AndAttributeParamAsDataClassAttribute: function() {
        Y.Assert.areSame(8, ds.MyClass1.count(ds.MyClass1.cnum, true), "ds.MyClass1.count(ds.MyClass1.cnum,true) failed.");
    },
    testCount_DistinctParamAsStringAndAttributeParamAsDataClassAttribute: function() {
        Y.Assert.areSame(8, ds.MyClass1.count(ds.MyClass1.cnum, 'distinct'), "ds.MyClass1.count(ds.MyClass1.cnum,'distinct') failed.");
    },
    testCount_DistinctParamAsBool_false_AndAttributeParamAsDataClassAttribute: function() {
        Y.Assert.areSame(11, ds.MyClass1.count(ds.MyClass1.cnum, false), "ds.MyClass1.count(ds.MyClass1.cnum,false) failed.");
    },
    testCount_DistinctParamAsBool_false_AndAttributeParamAsString: function() {
        Y.Assert.areSame(11, ds.MyClass1.count('cnum', false), "ds.MyClass1.count('myAttribute',false) failed.");
    },
    //empty data class
    testCount_DataClassWithoutData: function() {
        Y.Assert.areSame(0, ds.MyEmptyClass.count(), "empty data class failed.");
    },
    //Data class with attribute named 'distinct'
    testCount_DataClassAttributeNamedDistinct: function() {
        Y.Assert.areSame(2, ds.MyClass2.count('distinct'), "Data class with attribute named 'distinct' failed.");
    },
    //Inexistant attribute (WAK0071944 Bug Fixed)
    testCount_InexistantAttributeParam: function() {
		var isGood1 = false;
		var isGood2 = false;
		try
		{
			ds.MyClass1.count('myInexistantAttribute');
		}
		catch(e)
		{
			isGood1 = true;
		}
		
		try
		{
			ds.MyClass1.count(ds.MyClass1.myInexistantAttribute);
		}
		catch(e)
		{
			isGood2 = true;
		}
		
		if(!isGood1 || !isGood2)
			Y.Assert.fail("Inexistant attribute failed.");
    },
    //other class attribute (WAK0072036 Bug Fixed test)
    testCount_BadAttributeParamAsOtherDataClassAttribute: function() {
		var isGood1 = false;
		var isGood2 = false;
		try
		{
			ds.MyClass1.count(ds.MyClass2.cnum);
		}
		catch(e)
		{
			isGood1 = true;
		}
		try
		{
			ds.MyClass1.count(ds.MyClass1.clink.cnum);
		}
		catch(e)
		{
			isGood2 = true;
		}
		if(!isGood1)	message+="attribute of other dataclass";
		if(!isGood1 && !isGood2) message+=" and ";
		if(!isGood2)	message+="attribute of linked dataclass";
		if(!isGood1 || !isGood2)
			Y.Assert.fail("count with "+message+" should generate exception.");
    },
    //empty param
    testCount_DataClassAttributeAsEmptyString: function() {
	var isGood = true;
		try
		{
			ds.MyClass1.count('');
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail( "DataClass attribure as empty string should fail.");
    },
    //Existence
    testCreateEntity_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.createEntity(), "Existence failed.");
    },
    //Verify that createEntity don't save
    testCreateEntity_VerifyThatEntityIsNotSaved: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.areSame(11, ds.MyClass1.length, "createEntity save new entity.");
    },
    //Verify attributes value
    testCreateEntity_NumberAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cnum, "bad attribute value failed.");
    },
    testCreateEntity_StringAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.name, "bad attribute value failed.");
    },
    testCreateEntity_DateAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cdate, "bad attribute value failed.");
    },
    testCreateEntity_BlobAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cblob, "bad attribute value failed.");
    },
    testCreateEntity_ByteAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cbyte, "bad attribute value failed.");
    },
    testCreateEntity_WordAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cword, "bad attribute value failed.");
    },
    testCreateEntity_CuuidAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cuuid, "bad attribute value failed.");
    },
    testCreateEntity_DurationAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isNull(myEntity.cduration, "bad attribute value failed.");
    },
    testCreateEntity_ImageAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isTrue((myEntity.cimage === null), "bad attribute value failed.");
    },
    testCreateEntity_LinkAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.isTrue(myEntity.clink === null || myEntity.clink === undefined, "bad attribute value failed.");
    },
    testCreateEntity_IDAttributInitialValue: function() {
        var myEntity = ds.MyClass1.createEntity();
        Y.Assert.areSame(10, myEntity.ID, "bad attribute value failed.");
    },
    //data class without attributes
    testCreateEntity_DataClassWithoutAttributes: function() {
        var myEntity = ds.MyClassWithoutAttributs.createEntity();
        Y.Assert.isObject(myEntity, "data class without attributes failed.");
    },
    //save empty entity
    testCreateEntity_SaveEmptyEntity: function() {
        var oldLength = ds.MyClassSave.length;
        var myEntity = ds.MyClassSave.createEntity();
        myEntity.save();
        Y.Assert.areSame(oldLength + 1, ds.MyClassSave.length, "save empty entity failed.");
    },
    //save entity
    testCreateEntity_SaveEntity: function() {
        var oldLength = ds.MyClassSave.length;
        var myEntity = ds.MyClassSave.createEntity();
        myEntity.cnum = 17;
        myEntity.save();
        Y.Assert.areSame(oldLength + 1, ds.MyClassSave.length, "save entity failed.");
    },

    //Existence
    testCreateEntityCollection_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.createEntityCollection(), "Existence failed.");
    },
    //Verify that new collection is empty
    testCreateEntityCollection2: function() {
        Y.Assert.areSame(0, ds.MyClass1.createEntityCollection().length, "New collection is not empty.");
    },
    //add a bad entity
    testCreateEntityCollection_AddBadEntity: function() {
        var badEntity = ds.MyClass2.find("ID = 1");
        var myCol = ds.MyClass1.createEntityCollection();
        myCol.add(badEntity);
        Y.Assert.areSame(0, myCol.length, "Add a bad entity failed.");
    },
    //add a good entity
    testCreateEntityCollection4: function() {
        var goodEntity = ds.MyClass1.find("cnum = 2");
        var myCol = ds.MyClass1.createEntityCollection();
        myCol.add(goodEntity);
        Y.Assert.areSame(1, myCol.length, "Add a good entity failed.");
    },

    //Existence
    testDistinctValues_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.distinctValues('cnum'), "Existence failed.");
    },
    //Syntax
    testDistinctValues2: function() {
        Y.Assert.isObject(ds.MyClass1.distinctValues(ds.MyClass1.cnum), "Syntax ds.MyClass1.distinctValues(ds.MyClass1.cnum) failed.");
    },
    //end syntax

    //Inexistant attribute
    testDistinctValues_InexistantAttributeParam: function() {
		var b = false;
		try{
			ds.MyClass1.distinctValues('myInexistantAttribute');
		}catch(e)
		{
			b=true;
		}
		if(!b) Y.Assert.fail("'distinctValues' method should not work with inexistant attribute.");
    },
    //other class attribute (WAK0072036 Bug)
    testDistinctValues_BadAttributeParamAsOtherDataClassAttribute: function() {
		var isGood1 = true;
		var isGood2 =true;
		var message = "";
		try
		{
			ds.MyClass1.distinctValues(ds.MyClass2.cnum);
			isGood1 = false;
		}
		catch(e){}
		if(!isGood1)
			message += "'Other class attribute'";
		try
		{
			ds.MyClass1.distinctValues(ds.MyClass1.clink.cnum);
			isGood2 = false;
		}
		catch(e){}
		if(!isGood1 && !isGood2)
			message +=" and ";
		if(!isGood2)
			message += "'Linked attribute'";
        if(!isGood1 || !isGood2)
			Y.Assert.fail("distinctValues with "+message+" fail.");
    },
    //empty collection
    testDistinctValues_CollectionWithoutData: function() {
        var arr = ds.MyEmptyClass.distinctValues(ds.MyEmptyClass.cnum);
        Y.Assert.areSame(0, arr.length, "empty data class failed.");
    },
    //empty param
    testDistinctValues_DataClassAttributeAsEmptyString: function() {
		var b = false;
		try{
			ds.MyClass1.distinctValues('');
		}catch(e)
		{
			b=true;
		}
		if(!b) Y.Assert.fail("'distinctValues' method should not word without params.");
    },
    //duplicated attribute not containing null values
    testDistinctValues_DuplicatedNotNullData: function() {
        var arr = ds.MyClass1.distinctValues(ds.MyClass1.cnum);
        Y.Assert.areSame(8, arr.length, "distinctValues failed.");
        function sortNumber(a, b) {
            return a - b;
        };
        arr.sort(sortNumber);
        Y.Assert.areSame(-2, arr[0], "distinctValues failed.");
        Y.Assert.areSame(1, arr[1], "distinctValues failed.");
        Y.Assert.areSame(2, arr[2], "distinctValues failed.");
        Y.Assert.areSame(3, arr[3], "distinctValues failed.");
        Y.Assert.areSame(4, arr[4], "distinctValues failed.");
        Y.Assert.areSame(5, arr[5], "distinctValues failed.");
        Y.Assert.areSame(8, arr[6], "distinctValues failed.");
    },
    //duplicate null and not null data
    testDistinctValues_DuplicateNullAndNotNullData: function() {
        var arr = ds.MyClass1.distinctValues(ds.MyClass1.cbyte);
        Y.Assert.areSame(6, arr.length, "distinctValues failed.");
        function sortNumber(a, b) {
            return a - b;
        };
        arr.sort(sortNumber);
        Y.Assert.areSame(null, arr[0], "distinctValues failed.");
        Y.Assert.areSame(1, arr[1], "distinctValues failed.");
        Y.Assert.areSame(2, arr[2], "distinctValues failed.");
        Y.Assert.areSame(3, arr[3], "distinctValues failed.");
        Y.Assert.areSame(4, arr[4], "distinctValues failed.");
        Y.Assert.areSame(5, arr[5], "distinctValues failed.");
    },
    //no duplicated attribute not containing null values
    testDistinctValues_NoDuplicatedDataAndNoNullValues: function() {
        var arr = ds.MyClass1.distinctValues(ds.MyClass1.clong);
        Y.Assert.areSame(11, arr.length, "distinctValues failed.");
        function sortNumber(a, b) {
            return a - b;
        };
        arr.sort(sortNumber);
        Y.Assert.areSame(1, arr[0], "distinctValues failed.");
        Y.Assert.areSame(2, arr[1], "distinctValues failed.");
        Y.Assert.areSame(3, arr[2], "distinctValues failed.");
        Y.Assert.areSame(4, arr[3], "distinctValues failed.");
        Y.Assert.areSame(5, arr[4], "distinctValues failed.");
        Y.Assert.areSame(6, arr[5], "distinctValues failed.");
        Y.Assert.areSame(7, arr[6], "distinctValues failed.");
        Y.Assert.areSame(8, arr[7], "distinctValues failed.");
        Y.Assert.areSame(9, arr[8], "distinctValues failed.");
        Y.Assert.areSame(10, arr[9], "distinctValues failed.");
		Y.Assert.areSame(999999, arr[10], "distinctValues failed.");
    },
    //Existence
    testFind_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.find("cnum = 1"), "Existence failed.");
    },
    testFind_ExistenceOnCollection: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum=2");
        var entity2 = ds.MyClass1.find("cnum=8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.isObject(ds.MyClass1.find("cnum = 2"), "Existence failed.");
    },
    //find() is same as query() so we do only the specific tests 
    //request with null as result
    testFind_FalseQuery: function() {
        Y.Assert.isNull(ds.MyClass1.find("cnum = 100000"), "null result failed.");
    },
    //request with results
    testFind_QueryWithResults: function() {
        var result = ds.MyClass1.find("cnum > 3");
        Y.Assert.isObject(result, "request ds.MyClass1.find( 'cnum > 3') failed.");
        //Verify that entity is the first by creation order
        Y.Assert.areSame(4, result.ID, "Existence failed.");
    },
    //Existence
    testFirst_ExistenceOnDataClass: function() {
        Y.Assert.isObject(ds.MyClass1.first(), "Existence failed.");
    },
    testFirst_ExistenceOnCollection: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum=2");
        var entity2 = ds.MyClass1.find("cnum=8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.isObject(ds.MyClass1.first(), "Existence failed.");
    },
    //empty data class
    testFirst_DataClassWithoutData: function() {
        Y.Assert.isNull(ds.MyEmptyClass.first(), "empty data class failed.");
    },
    //empty collection
    testFirst_CollectionWithoutData: function() {
        var myEmptyCol = ds.MyClass1.createEntityCollection();
        Y.Assert.isNull(myEmptyCol.first(), "empty collection failed.");
    },
    //data class with data
    testFirst4: function() {
        var result = ds.MyClass1.first();
        Y.Assert.areSame(1, result.ID, "data class failed.");
    },
    //collection with data
    testFirst_CollectionWithData: function() {
        var entity1 = ds.MyClass1.find("cnum = 2");
        var entity2 = ds.MyClass1.find("cnum = 8");
        var myCol = ds.MyClass1.createEntityCollection();
        myCol.add(entity1);
        myCol.add(entity2);
        var result = myCol.first();
        Y.Assert.areSame(2, result.cnum, "collection failed.");
    },
    //
    testForEach_Null: function() {
        var isException = false;
        try {
            ds.MyForEachClass.forEach(null);
        }
        catch (e) {
            isException = true;
        }

        if (isException)
            Y.Assert.fail("An exception is thrown.");
    },
    //Alias (LR:Fixed bug, JL: le each va disparaitre)
    testForEach_Alias: function() {
        var isGood = true;
		try{
			ds.MyForEachClass.each(function(thisEntity, iterator) {
			;
			}
			);
			isGood = false;
		}
		catch(e){}
        if(!isGood)
            Y.Assert.fail("Alias each still exist.");
    },
    //Callback must occure in each entity one and only one time in the ascending order
    testForEach: function() {
        var result = "";
        ds.MyForEachClass.forEach(function(thisEntity, iterator) {
            switch (iterator + 1) {
                case 1:
                    result += thisEntity.ID;
                    break;
                case 2:
                    result += thisEntity.ID;
                    break;
                case 3:
                    result += thisEntity.ID;
                    break;
                default:
                    result += "z";
            }
        }
        );

        if (result !== "123") {
            var message = "forEach failed.";
            if (message.length === 0)
                message = "forEach callback is not called.";
            else if (message.length > 3)
                message = "forEach callback is called too much.";
            else if (message.length < 3)
                message = "forEach callback is not called enough.";
            else if (!message.indexOf("z") == -1)
                message = "forEach callback is not called in the good order.";
            else
                message = "forEach callback is not called with a bad iterator.";
            Y.Assert.fail(message);
        }
    },
    //Auto save
    testForEach_AutomaticSave: function() {
        ds.MyForEachClass.forEach(function(thisEntity, iterator) {
            if (thisEntity.ID === 2)
                thisEntity.cname = thisEntity.ID;
        }
        );

        var theEntity = ds.MyForEachClass.find("ID=2");
        Y.Assert.areSame("2", theEntity.cname, "Auto save failed.");
    },
    //An other entity auto save (JL's remarks: Non elle ne seront pas modifiés )
    testForEach_AutomaticSaveAnOtherEntity: function() {
        var value1 = "other1";
        var value3 = "other3";
        ds.MyForEachClass.forEach(function(thisEntity, iterator) {
            if (thisEntity.ID === 2) {
                var anEntity = ds.MyForEachClass.find("ID==1");
                anEntity.cname = value1;
                anEntity = ds.MyForEachClass.find("ID==3");
                anEntity.cname = value3;
            }
        }
        );

        var theEntity = ds.MyForEachClass.find("ID=1");
        Y.Assert.areNotSame(value1, theEntity.cname, "Auto save an other entity fail.");
        theEntity = ds.MyForEachClass.find("ID=3");
        Y.Assert.areNotSame(value3, theEntity.cname, "Auto save an other entity fail.");
    },
    //save
    testForEach_SaveNewEntity: function() {
        var total = ds.MyForEachClass.length;
        isCalledInNewEntity = false;

        ds.MyForEachClass.forEach(function(thisEntity, iterator) {
            if (thisEntity.ID === 1) {
                var newEntity = ds.MyForEachClass.createEntity();
                newEntity.cname = "new one";
                newEntity.save();
            }

            if (iterator === total)
                isCalledInNewEntity = true;
        }
        );

        var theEntity = ds.MyForEachClass.find("cname='new one'");
        Y.Assert.isNotNull(theEntity, "Save new entity failed.");
        Y.Assert.isFalse(isCalledInNewEntity, "Call back is called on entity created inCallBack.");
    },
    //save followed by an auto save
    testForEach_SaveFollowedByAnAutomaticSave: function() {
        var firstValue = "first value";
        var secondValue = "second value";
        ds.MyForEachClass.forEach(function(thisEntity, iterator) {
            if (thisEntity.ID === 1) {
                try {
                    thisEntity.cname = firstValue;
                    thisEntity.save();
                }
                catch (e) {

                }
                thisEntity.cname = secondValue;
            }

        }
        );

        var theEntity = ds.MyForEachClass.find("ID=1");
        Y.Assert.areSame(secondValue, theEntity.cname, "Auto save is not done");
    },
    //delete an entity
    testForEach_DeleteAnEntity: function() {
        var result = "";
        var oldResult = "";
        ds.MyRemoveForEachClass.forEach(function(thisEntity, iterator) {
            oldResult += thisEntity.ID;
        });
        var newEntity = ds.MyRemoveForEachClass.createEntity();
        newEntity.save();
        var newId = newEntity.ID;
        ds.MyRemoveForEachClass.forEach(function(thisEntity, iterator) {
            result += thisEntity.ID;
            if (thisEntity.ID == 2) {
                var firstEntity = ds.MyRemoveForEachClass.find("ID=1");
                var lastEntity = ds.MyRemoveForEachClass.find("ID=" + newId);
                firstEntity.remove();
                firstEntity.save();
                lastEntity.remove();
                lastEntity.save();
            }
        }
        );

        Y.Assert.areSame(oldResult, result, "Call back fail with entity remove.");
    },
    //fromArray(): we can't apply FromArray to a collection
    testFromArray_EntityCollection: function() {
		var myCollection = ds.MyClass8.createEntityCollection();
		var ar = new Array();
		ar[0] = {name:"smito",age:15,salary:1520};
		var isGood = true;
		try{
			myCollection.fromArray(ar);
			isGood = false;
		}
		catch(e){
		
		}
		if(!isGood)
			Y.Assert.fail("fromArray of a Collection fail");
    },
	//fromArray(): null param
    testFromArray_NullParam: function() {	
		ds.MyFromArrayClass.fromArray(null);
		Y.Assert.areSame(0,ds.MyFromArrayClass.length,"fromArray with null parameter fail");
    },
	//fromArray(): null array
    testFromArray_NullArray: function() {	
		var array = null;
		ds.MyFromArrayClass.fromArray(array);
		Y.Assert.areSame(0,ds.MyFromArrayClass.length,"fromArray with null array fail");
    },
	//fromArray(): normal functionning, array with data ( Except 'image' , 'blob' and 'uuid' )
    testFromArray_ArrayWhithData: function() {
		var isGood = true;
		//var path = application.getFolder("path");
		//var path1 = path + "img/wak0.png";
		//var path2 = path + "img/wakanda.png";
		//var path3 = path + "img/wak1.jpg";
		var dates = [new Date("05/07/2012"),new Date("06/07/2012"),new Date("06/07/2010")];
		//var myImage1 = loadImage(path1);
		//var myImage2 = loadImage(path2);
		//var myImage3 = loadImage(path3);
		var array = new Array();
		array[0] = {name:"M",cnum: 12,cdate: dates[0],cbyte:15, clong:123456, cword:3625, cduration:3};
		array[1] = {name:"B",cnum: 10,cdate: dates[1],cbyte:18, clong:123400, cword:3629, cduration:1};
		array[2] = {name:"P",cnum: 13,cdate: dates[2],cbyte:14, clong:123430, cword:3620, cduration:2};
		ds.MyFromArrayClass.fromArray(array);
		for(var i = 0; i<3; i++)
		{
			var entity = ds.MyFromArrayClass.find("ID="+(i+1));
			if(entity.name!= array[i].name || entity.cnum != array[i].cnum || entity.clong != array[i].clong || entity.cword != array[i].cword || entity.cduration != array[i].cduration )
				isGood =false;
			else
			{
				/*if(entity.cimage != null)
				{
					if(entity.cimage.size != array[i].cimage.size)
						isGood = false
				}
				else
				{
					if(array[i].cdate.getTime() != dates[i].getTime())
						isGood = false;
				}*/
				;
			}
		}
		if(!isGood)
			Y.Assert.fail("fromArray using array with data has failed");
    },
	//testFromArray: datastore with data containing images
	testFromArray_ArrayWhithDataContainingImages: function() {
		var isGood = true;
		var s = "";
		var path = application.getFolder("path");
		var path1 = path + "img/wak0.png";
		var path2 = path + "img/wakanda.png";
		var path3 = path + "img/wak1.jpg";
		var myImage1 = loadImage(path1);
		var myImage2 = loadImage(path2);
		var myImage3 = loadImage(path3);
		var array = new Array();
		array[0] = {cname:"M",cimage:myImage1};
		array[1] = {cname:"B",cimage:myImage2};
		array[2] = {cname:"P",cimage:myImage3};
		ds.MyClassForImageTest2.fromArray(array);
		for(var i = 0; i<3; i++)
		{
			var entity = ds.MyClassForImageTest2.find("ID="+(i+1));
			if(entity.cname!= array[i].cname)
			 {
				isGood =false;
				s+="1";
			}
			else
			{
				if(entity.cimage != null)
				{
					if(entity.cimage.size != array[i].cimage.size)
					 {
						isGood = false;
						s+="2";
					}
				}
			}
		}
		if(!isGood)
			Y.Assert.fail("fromArray using array with data containing images has failed"+s);
    },
	//fromArray(): array without data
	testFromArray_ArrayWithoutData: function() {
		var isGood = true;
		var lastArray = ds.MyFromArrayClass.toArray();
		var array = new Array();
		ds.MyFromArrayClass.fromArray(array);
		for(var i= 0;i<ds.MyFromArrayClass.length;i++){
			var entity = ds.MyFromArrayClass.find("ID="+(i+1));
			if(lastArray[i].ID!= entity.ID || lastArray[i].name!= entity.name || lastArray[i].cnum!= entity.cnum ||lastArray[i].clong!= entity.clong || lastArray[i].cbyte!= entity.cbyte || lastArray[i].cword!= entity.cword || lastArray[i].cduration!= entity.cduration )
				{
					isGood = false;
					break;
				}
		}
		if(!isGood)
			Y.Assert.fail("fromArray using array without data has failed");
	},
	//fromArray(): attribute not found.
    testFromArray_MissingAttributes: function() {
		var isGood = true;
		var array = new Array();
		array[0] = {cbyte:0, clong:123456, cword:3625, cduration:0};
		ds.MyFromArrayClass.fromArray(array);
		var entity = ds.MyFromArrayClass.find("ID=4");
		if(entity.name!=null || entity.cnum!=null || entity.cdate!= null || entity.cbyte!=array[0].cbyte || entity.clong!=array[0].clong || entity.cword!=array[0].cword || entity.cduration!=array[0].cduration)
			isGood= false;
		if(!isGood)
			Y.Assert.fail("FromArray with missingattribute fail.");
	},
	//fromArray(): array contains attributes that do not exist in the class
    testFromArray_NonExistentAttributes: function() {
		var isGood = true;
		var array = new Array();
		array[0] = {nme:"oho",name:"Z",cnum:10,cdate: new Date("01/01/2012"),cnm:0,cbyte:50, clong:5000,  cword:500, cduration:50,rien:"de rien"};
		ds.MyFromArrayClass.fromArray(array);
		var entity = ds.MyFromArrayClass.find("ID=5");
		if(entity.name!=array[0].name || entity.cnum!=array[0].cnum || entity.cdate.getTime() != array[0].cdate.getTime() || entity.cbyte!=array[0].cbyte || entity.clong!=array[0].clong || entity.cword!=array[0].cword || entity.cduration!=array[0].cduration)
			isGood= false;
		if(!isGood)
			Y.Assert.fail("FromArray with non existent attributes fail.");
	},
	//fromArray(): Replace an existing entity
    testFromArray_replaceEntity: function() {
		var isGood = true;
		var array = new Array();
		array[0] = {__KEY:5,name:"new one",cnum:10,cdate: new Date("01/01/2012"),cbyte:50, clong:5000,  cword:500, cduration:50};
		ds.MyFromArrayClass.fromArray(array);
		var entity = ds.MyFromArrayClass.find("ID=6");
		if(entity.name!=array[0].name || entity.cnum!=array[0].cnum || entity.cdate.getTime() != array[0].cdate.getTime() || entity.cbyte!=array[0].cbyte || entity.clong!=array[0].clong || entity.cword!=array[0].cword || entity.cduration!=array[0].cduration)
			isGood= false;
		if(!isGood)
			Y.Assert.fail("FromArray: Replace an existing entity fail.");
	},
	//fromArray(): Array with undefined value
    testFromArray_ArrayWithUndefinedValues: function() {
		var isGood = true;
		var array = new Array();
		array[0] = {name:"null entity", cnum:undefined ,cdate:undefined , clong: undefined};
		ds.MyFromArrayClass.fromArray(array);
		var entity = ds.MyFromArrayClass.find("ID=7");
		if(entity.name!="null entity" || entity.cnum!=null || entity.cdate != null || entity.cbyte!=null || entity.clong!=null || entity.cword!=null || entity.cduration!=null)
			isGood= false;
		if(!isGood)
			Y.Assert.fail("FromArray: Array with undefined values fail.");
	},
	//fromArray(): Array with undefined KEY value 
    testFromArray_ArrayWithUndefinedKeyValues: function() {
		var isGood = true;
		var array = new Array();
		array[0] = {__KEY:undefined, name:"undefined __key value", cnum:undefined ,cdate:undefined , clong: undefined};
		ds.MyFromArrayClass.fromArray(array);
		var entity = ds.MyFromArrayClass.find("ID=8");
		if(entity.name!="undefined __key value" || entity.cnum!=null || entity.cdate != null || entity.cbyte!=null || entity.clong!=null || entity.cword!=null || entity.cduration!=null)
			isGood= false;
		if(!isGood)
			Y.Assert.fail("FromArray: Array with undefined values fail.");
	},
	//fromArray(): undefined image value
    testFromArray_ArrayWithUndefinedImageValue: function() {
		var isGood = true;
		var array = new Array();
		array[0] = {name:"default image value",cnum:210 ,cdate: new Date("09/01/2012"),cbyte:58, clong:5080,  cword:578, cduration:5};
		ds.MyFromArrayClass.fromArray(array);
		var entity = ds.MyFromArrayClass.find("ID=9");
		if(entity.name!=array[0].name || entity.cnum!=array[0].cnum || entity.cdate.getTime() != array[0].cdate.getTime() || entity.cbyte!=array[0].cbyte || entity.clong!=array[0].clong || entity.cword!=array[0].cword || entity.cduration!=array[0].cduration)
			isGood= false;
		/*else
			if(entity.cimage!=null)
				Y.Assert.fail("FromArray dont return null as default value for image attribute");
		*/
		if(!isGood)
			Y.Assert.fail("FromArray: Array with undefined image values fail.");
	},
    //collection with data
    testGetName: function() {
        Y.Assert.areSame("MyClass1", ds.MyClass1.getName(), "getName failed.");
    },
    //Existence
    testMax_Existence: function() {
        Y.Assert.isNumber(ds.MyClass1.max('cnum'), "Existence failed.");
    },
    //Syntax
    //Must fail
    //null param
    testMax_NullParam: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.max(null);
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("null param should fail.");
    },
    //Inexistant attribut
    testMax_InexistantAttributeParam: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.max("myInexistantAttribute");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("Inexistant attribut should fail.");
    },
    //bad field type
    //string: tri par ordre alphabétique
    testMax_BadAttributeParamTypeString: function() {
		var result = ds.MyClass1.max("name");
		if(result!="nine")
			Y.Assert.fail( "Syntax: ds.MyClass1.max(string) should fail.");
    },
    //date
    testMax_BadAttributeParamTypeDate: function() {
		var message = "";
		var result = ds.MyClass1.max("cdate");
		var array = new Array();
		for(var i = 1 ; i<=11;i++)
		{
			array[i] = ds.MyClass1.find("ID="+i).cdate.getTime();
		}
		var max = array[1];
		for(var i = 2 ; i<=11;i++)
		{
				if(max<array[i])
					max = array[i];
		}
		message +=" ("+result.getTime()+" # "+max+")";
		if(result.getTime() != max)
			Y.Assert.fail( "Syntax: ds.MyClass1.max(cdate) fail."+message);
    },
    //duration
    testMax_BadAttributeParamTypeDuration: function() {
        Y.Assert.areSame(9,ds.MyClass1.max("cduration"), "ds.MyClass1.max(duration) return wrong values.");
    },
    //bool
    testMax_BadAttributeParamTypeBool: function() {
		Y.Assert.areSame(true,ds.MyClass1.max("cbool"),"max method with bool attribute fail.");
    },
    //blob
    testMax_BadAttributeParamTypeBlob: function() {
		var isGood = true;
		try{
			ds.MyClass1.max("cblob");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("max with 'blob' attribute should generate exception.");
    },
    //end syntax
    //empty param
    testMax_DataClassAttributeAsEmptyString: function() {
	var isGood = true;
		try
		{
			ds.MyClass1.max("");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("empty param should fail.");
    },
    //other class attribute (WAK0072036 Bug Fixed test)
    testMax_BadAttributeParamAsOtherDataClassAttribute: function() {
        var isGood1 = true;
		var isGood2 = true;
        try {
            var x = ds.MyClass1.max(ds.MyClass2.cnum);
            isGood1 = false;
        }
        catch (err) {}
        try {
            var x = ds.MyClass1.max(ds.MyClass1.clink.cnum);
            isGood2 = false;
        }
        catch (err) {}
        if (!isGood1 || !isGood2)
            Y.Assert.fail("Max methode with other dataclass attribute fail should.");
    },
    //empty data class
    testMax_DataClassWithoutData: function() {
        Y.Assert.isNull(ds.MyEmptyClass.max('cnum'), "empty data class failed.");
    },
    //empty collection
    testMax_CollectionWithoutData: function() {
        var myEmptyCol = ds.MyClass1.createEntityCollection();
        Y.Assert.isNull(myEmptyCol.max('cnum'), "empty collection class failed.");
    },
    //
    testMax_DataClassAttributeAsString: function() {
        Y.Assert.areSame(97, ds.MyClass1.max('cnum'), "max data class failed.");
    },
    //data class without null values
    testMax_DataClassAttributeAsAttribute: function() {
        Y.Assert.areSame(97, ds.MyClass1.max(ds.MyClass1.cnum), "max data class failed.");
    },
    //
    testMax_CollectionWithData: function() {
        var entity1 = ds.MyClass1.find("cnum = 2");
        var entity2 = ds.MyClass1.find("cnum = 8");
        var myCol = ds.MyClass1.createEntityCollection();
        myCol.add(entity1);
        myCol.add(entity2);
        Y.Assert.areSame(8, myCol.max('cnum'), "max collection failed.");
    },
    //
    testMax_DataClassWithOnlyNullValues: function() {
        Y.Assert.isNull(ds.MyNullClass.max('cnum'), "data class with only null values failed.");
    },
    //data class with null and not null values
    testMax_DataClassWithNullAndNotNullValues: function() {
        Y.Assert.areSame(98, ds.MyClass1.max('cbyte'), "max data class failed.");
    },
    //Existance
    testMin_Existence: function() {
        Y.Assert.isNumber(ds.MyClass1.min('cnum'), "Existance failed.");
    },
    //Syntax
    //Must fail
    //null param
    testMin_NullParam: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.min(null);
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("null param should fail.");
    },
    //Inexistant attribut
    testMin_InexistantAttributeParam: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.min("myInexistantAttribute");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("Inexistant attribut failed.");
    },
    //bad field type
    //string
    testMin_BadAttributeParamTypeString: function() {
		var result = ds.MyClass1.min("name");
		if(result != "a")
			Y.Assert.fail("Syntax: ds.MyClass1.min(string) fail.");
    },
    //date
    testMin_BadAttributeParamTypeDate: function() {
		var result = ds.MyClass1.min("cdate");
		if(result.getTime() != (new Date("11/30/1899")).getTime())
			Y.Assert.fail( "Syntax: ds.MyClass1.min(date) should fail or return a date value.");
    },
    //duration
    testMin_BadAttributeParamTypeDuration: function() {
        Y.Assert.areSame(0,ds.MyClass1.min("cduration"), "Syntax failed : ds.MyClass1.min(duration).");
    },
    //bool
    testMin_BadAttributeParamTypeBool: function() {
		Y.Assert.areSame(false,ds.MyClass1.min("cbool"),"min method with bool param fail.");
    },
    //blob
    testMin_BadAttributeParamTypeBlob: function() {
		var isGood = true;
		try{
			ds.MyClass1.min("cblob");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail( "min with 'blob' attribute should generate exception.");
    },
    //end syntax
    //empty param
    testMin_DataClassAttributeAsEmptyString: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.min("");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("empty param should fail.");
    },
    //link (WAK0072036 Bug Fixed test)
    testMin_BadAttributeParamAsOtherDataClassAttribute: function() {
        var isGood1 = true;
		var isGood2 = true;
        try {
            var x = ds.MyClass1.min(ds.MyClass2.cnum);
            isGood1 = false;
        }
        catch (err) {}
        try {
            var x = ds.MyClass1.min(ds.MyClass1.clink.cnum);
            isGood2 = false;
        }
        catch (err) {}
        if (!isGood1 || !isGood2)
            Y.Assert.fail("min methode with param as other dataclss attribute should fail.");
    },
    //empty data class
    testMin_DataClassWithoutData: function() {
        Y.Assert.isNull(ds.MyEmptyClass.min('cnum'), "empty data class failed.");
    },
    //empty collection
    testMin_CollectionWithoutData: function() {
        var myEmptyCol = ds.MyClass1.createEntityCollection();
        Y.Assert.isNull(myEmptyCol.min('cnum'), "empty collection class failed.");
    },
    //
    testMin_DataClassAttributeAsString: function() {
        Y.Assert.areSame(-2, ds.MyClass1.min('cnum'), "min data class failed.");
    },
    //data class without null values
    testMin_DataClassAttributeAsAttribute: function() {
        Y.Assert.areSame(-2, ds.MyClass1.min(ds.MyClass1.cnum), "min data class failed.");
    },
    //
    testMin_CollectionWithData: function() {
        var entity1 = ds.MyClass1.find("cnum = 2");
        var entity2 = ds.MyClass1.find("cnum = 8");
        var myCol = ds.MyClass1.createEntityCollection();
        myCol.add(entity1);
        myCol.add(entity2);
        Y.Assert.areSame(2, myCol.min('cnum'), "min collection failed.");
    },
    //
    testMin_DataClassWithOnlyNullValues: function() {
        Y.Assert.isNull(ds.MyNullClass.min('cnum'), "data class with only null values failed.");
    },
    //data class with null and not null values
    testMin_DataClassWithNullAndNotNullValues: function() {
        Y.Assert.areSame(1, ds.MyClass1.min('cbyte'), "min data class failed.");
    },
    //
    //Existance  
    testOrderBy_Existence: function() {
        Y.Assert.isObject(ds.MyClass1.orderBy('cnum'), "Existance failed.");
        Y.Assert.isObject(ds.MyClass1.all().orderBy('cnum'), "Existance failed.");
    },
    //Syntax
    //Must fail 
    //Without first param
    testOrderBy_WithoutFirstParam: function() {
		var isGood1 = true;
		var isGood2 = true;
		var message = "";
		try
		{
			ds.MyClass1.orderBy('asc');
			isGood1 = false;
		}
		catch(e){}
		try
		{
			ds.MyClass1.orderBy('desc');
			isGood2 = false;
		}
		catch(e){}
		if(!isGood1 || !isGood2)
		{
			if(!isGood1)
				message += "ds.MyClass1.orderBy('asc')";
			if(!isGood1 && !isGood2)
				message += " and ";
			if(!isGood2)
				message += "ds.MyClass1.orderBy('desc')";
			Y.Assert.fail("Syntax: "+message+" should fail.");
		}
    },
    //empty param
    testOrderBy_EmptyFirstParam: function() {
        Y.Assert.isNull(ds.MyClass1.orderBy(''), "Syntax failed : ds.MyClass1.orderBy('').");
    },
    //inexistant attribute
    testOrderBy_InexistantAttribute: function() {
		var isGood = true;
			try
			{
				ds.MyClass1.orderBy('myInexistantAttribut');
				isGood = false;
			}
			catch(e){}
			if(!isGood)
				Y.Assert.fail("Syntax: ds.MyClass1.orderBy('myInexistantAttribut') should fail.");
			isGood = true;
			try
			{
				ds.MyClass1.orderBy(ds.MyClass1.myInexistantAttribut);
				isGood = false;
			}
			catch(e){}
			if(!isGood)
				Y.Assert.fail("Syntax: ds.MyClass1.orderBy(ds.MyClass1.myInexistantAttribut) should fail.");
    },
    //Bad attribute syntax ( Bug: WAK0076003, LR: est fait pour ne pas générer d'erreur, c'est voulu. )
    testOrderBy_SyntaxBadParam: function() {
		var isGood = true;
		var message = "";
			try
			{
				ds.MyClass1.orderBy(',');
				isGood = false;
			}
			catch(e){}
			if(isGood)
				message += " ds.MyClass1.orderBy(',')";
			isGood = true;
			try
			{
				ds.MyClass1.orderBy('cnum,');
				isGood = false;
			}
			catch(e){}
			if(isGood)
				message += " ds.MyClass1.orderBy('cnum,')";
			isGood = true;
			try
			{
				ds.MyClass1.orderBy(',cnum');
				isGood = false;
			}
			catch(e){}
			if(isGood)
				message += " ds.MyClass1.orderBy(',cnum')";
			if(message!="")
				Y.Assert.fail("Syntax:"+message+" should fail.");
    },
    //link
    testOrderBy_BadAttributeParamAsOtherDataClassAttribute: function() {
		var isGood = true;
		var message = "";
		try
		{
			ds.MyClass1.orderBy(ds.MyClass2.cnum);
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			message += " ds.MyClass1.orderBy(ds.MyClass2.cnum)";
		isGood = true;
		try
		{
			ds.MyClass1.orderBy(ds.MyClass1.clink.cnum);
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			message += " ds.MyClass1.orderBy(ds.MyClass1.clink.cnum)";
		if(message!="")
			Y.Assert.fail("Syntax:"+message+" should fail.");
    },
    //end syntax
    //second param case sensivity
    testOrderBy_AscParamCaseSensivity: function() {
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy("cnum Asc"), "Syntax failed : ds.MyClass1.orderBy('cnum','Asc').");

        var entityColAsc = ds.MyOrderbyClass.orderBy("cnum Asc");

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_DescParamCaseSensivity: function() {
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy("cnum DESC"), "Syntax failed : ds.MyClass1.orderBy('cnum','DESC').");

        var entityColDesc = ds.MyOrderbyClass.orderBy("cnum DESC");

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Same param twice
    testOrderBy_SameAttributeTwiceAsc: function() {
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy('cnum,cnum'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum,cnum').");
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, ds.MyOrderbyClass.cnum), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum, ds.MyClass1.cnum).");

        var entityColAsc = ds.MyOrderbyClass.orderBy('cnum asc,cnum asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);

        entityColAsc = ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, ds.MyOrderbyClass.cnum, 'asc');

        entityColAsc.forEach(orderByAscendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	// (WAK0072457 Bug fixed)
    testOrderBy_SameAttributeTwiceDesc: function() {
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy('cnum desc,cnum desc'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy('cnum,cnum').");
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, ds.MyOrderbyClass.cnum, 'desc'), "orderBy the same attribute twice failed : ds.MyClass1.orderBy(ds.MyClass1.cnum, ds.MyClass1.cnum).");

        var entityColDesc = ds.MyOrderbyClass.orderBy('cnum desc,cnum desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
        entityColDesc = ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum,'desc', ds.MyOrderbyClass.cnum, 'desc');

        entityColDesc.forEach(orderByDescendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //empty Data class
    testOrderBy_DataClassWithoutDataAsc: function() {
        Y.Assert.isObject(ds.MyEmptyClass.orderBy('cnum asc'), "orderBy of empty Data class failed.");
        Y.Assert.areSame(0, ds.MyEmptyClass.orderBy('cnum asc').length, "orderBy of empty Data class failed.");
    },
    testOrderBy_DataClassWithoutDataDesc: function() {
        Y.Assert.isObject(ds.MyEmptyClass.orderBy('cnum desc'), "orderBy of empty Data class failed.");
        Y.Assert.areSame(0, ds.MyEmptyClass.orderBy('cnum desc').length, "orderBy of empty Data class failed.");
    },
    //
    testOrderBy_TypeNumberAsStringAndAttributeParamAsc: function() {
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy('cnum asc'), "orderBy the same attribute twice failed : ds.MyOrderbyClass.orderBy('cnum').");
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, 'asc'), "orderBy the same attribute twice failed : ds.MyOrderbyClass.orderBy( ds.MyOrderbyClass.cnum).");

        var entityColAsc = ds.MyOrderbyClass.orderBy('cnum asc');
        var entityColAsc1 = ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, 'asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);

        entityColAsc1.forEach(orderByAscendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeNumberAsStringAndAttributeParamDesc: function() {
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy('cnum desc'), "orderBy the same attribute twice failed : ds.MyOrderbyClass.orderBy('cnum').");
        Y.Assert.isObject(ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, 'desc'), "orderBy the same attribute twice failed : ds.MyOrderbyClass.orderBy( ds.MyOrderbyClass.cnum).");

        var entityColDesc = ds.MyOrderbyClass.orderBy('cnum desc');
        var entityColDesc1 = ds.MyOrderbyClass.orderBy(ds.MyOrderbyClass.cnum, 'desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);

        entityColDesc1.forEach(orderByDescendingTestNumberValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //All type comparaison
    testOrderBy_TypeStringAsc: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cstring asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeStringDesc: function() {
        var entityColDesc = ds.MyOrderbyClass.orderBy('cstring desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeStringAsBlobAsc: function() {
		var isGood = true;
		try{
			ds.MyOrderbyClass.orderBy('cstringAsBlob asc');
			isGood = false;
		}
		catch(e)
		{
		}
		if(!isGood)
			Y.Assert.fail("OrderBy should not accept a string considered as a blob");
    },
    testOrderBy_TypeStringAsBlobDesc: function() {
		var isGood = true;
		try{
			ds.MyOrderbyClass.orderBy('cstringAsBlob desc');
			isGood = false;
		}
		catch(e)
		{
		}
		if(!isGood)
			Y.Assert.fail("OrderBy should not accept a string considered as a blob");
    },
    testOrderBy_TypeDurationAsc: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cduration asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDurationValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDurationDesc: function() {
        var entityColDesc = ds.MyOrderbyClass.orderBy('cduration desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDurationValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDateAsc: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cdate asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDateValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeDateDesc: function() {
        var entityColDesc = ds.MyOrderbyClass.orderBy('cdate desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestDateValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeImage: function() {
        Y.Assert.isNull(ds.MyOrderbyClass.orderBy('cimage asc'), "order by attribut of type image is not allowed.");
        Y.Assert.isNull(ds.MyOrderbyClass.orderBy('cimage desc'), "order by attribut of type image is not allowed.");
    },
    testOrderBy_TypeUUIDAsc: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cuuid asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestUUIDValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TypeUUIDDesc: function() {
        var entityColDesc = ds.MyOrderbyClass.orderBy('cuuid desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestUUIDValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//(WAK0072462 Bug)
    testOrderBy_TypeBlob: function() {
		var message = "";
		var isGood1 = true;
		var isGood2 = true;
		try
		{
			ds.MyOrderbyClass.orderBy('cblob asc');
			isGood1 = false;
		}
		catch(e)
		{
		}
		try
		{
			ds.MyOrderbyClass.orderBy('cblob desc');
			isGood2 = false;
		}
		catch(e)
		{
		}
		if(!isGood1)
			message+=" 'asc' ";
		if(!isGood1 && !isGood2 )
			message+="and";
		if(!isGood2)
			message+=" 'desc' ";
		if(!isGood1 || !isGood2 )
			Y.Assert.fail("order by attribut of type blob is not allowed. case :"+message);
    },
    //Only null values
    testOrderBy_DataClassWithOnlyNullValuesAsc: function() {
        var entityColAsc = ds.MyNullClass.orderBy('cnum asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNullValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_DataClassWithOnlyNullValuesDesc: function() {
        var entityColDesc = ds.MyNullClass.orderBy('cnum desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNullValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_CollectionWithOnlyNullValuesAsc: function() {
        var entityColAsc = ds.MyNullClass.all().orderBy('cnum asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestNullValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_CollectionWithOnlyNullValuesDesc: function() {
        var entityColDesc = ds.MyNullClass.all().orderBy('cnum desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTestNullValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Empty data class
    testOrderBy_EmptyDataClassAsc: function() {
        var entityColAsc = ds.MyEmptyClass.orderBy('cnum asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingEmptyValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_EmptyDataClassDesc: function() {
        var entityColDesc = ds.MyEmptyClass.orderBy('cnum desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingEmptyValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Empty collection
    testOrderBy_EmptyCollectionAsc: function() {
        var emptyCol = ds.MyEmptyClass.createEntityCollection();
        var entityColAsc = emptyCol.orderBy('cnum asc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingEmptyValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_EmptyCollectionDesc: function() {
        var emptyCol = ds.MyEmptyClass.createEntityCollection();
        var entityColDesc = emptyCol.orderBy('cnum desc');

        orderByError = "";
        entityColDesc.forEach(orderByDescendingEmptyValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Alias sort
    testOrderBy_DataClassSortAlias: function() {
        //DataClass
        var entityColAsc = ds.MyOrderbyClass.sort('cstring asc');
        var entityColDesc = ds.MyOrderbyClass.sort('cstring desc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
        entityColDesc.forEach(orderByDescendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_CollectionSortAlias: function() {
        var entityColAsc = ds.MyOrderbyClass.all().sort('cstring asc');
        var entityColDesc = ds.MyOrderbyClass.all().sort('cstring desc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
        entityColDesc.forEach(orderByDescendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Data class with attribute named 'asc'
    testOrderBy_DataClassAttributeNamedAsc: function() {
        var entityColAsc = ds.MyClass2.orderBy('asc asc');
        var entityColDesc = ds.MyClass2.orderBy('asc desc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestAscValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
        entityColDesc.forEach(orderByDescendingTestAscValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //Data class with attribute named 'desc'
    testOrderBy_DataClassAttributeNamedDesc: function() {
        var entityColAsc = ds.MyClass2.orderBy('desc asc');
        var entityColDesc = ds.MyClass2.orderBy('desc desc');

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestDescValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
        entityColDesc.forEach(orderByDescendingTestDescValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //asc is default value 
    testOrderBy_AscIsDefaultValueOfDataClass: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cstring'); //Data class

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_AscIsDefaultValueOfCollection: function() {
        var entityColAsc = ds.MyOrderbyClass.all().orderBy('cstring'); //collection

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTestStringValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    //sort with 2 attributs
    testOrderBy_TwoAttributsDataClassAscAsc: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cnum asc,cstring asc'); //Data class

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTwoAttributsValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//(WAK0072457 Bug)
    testOrderBy_TwoAttributsDataClassDescDesc: function() {
        var entityColDesc = ds.MyOrderbyClass.orderBy('cnum desc,cstring desc'); //Data class

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTwoAttributsValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TwoAttributsDataClassAscDes: function() {
        var entityColAsc = ds.MyOrderbyClass.orderBy('cnum asc,cstring desc'); //Data class

        orderByError = "";
        entityColAsc.forEach(orderByTwoAttributsValuesWithAscFirstParamAndDescSecondParam);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//(WAK0072457 Bug)
    testOrderBy_TwoAttributsDataClassDescAsc: function() {
        var entityColDesc = ds.MyOrderbyClass.orderBy('cnum desc,cstring asc'); //Data class

        orderByError = "";
        entityColDesc.forEach(orderByTwoAttributsValuesWithDescFirstParamAndAscSecondParam);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TwoAttributsCollectionAscAsc: function() {
        var entityColAsc = ds.MyOrderbyClass.all().orderBy('cnum asc,cstring asc'); //collection

        orderByError = "";
        entityColAsc.forEach(orderByAscendingTwoAttributsValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//(WAK0072457 Bug)
    testOrderBy_TwoAttributsCollectionDescDesc: function() {
        var entityColDesc = ds.MyOrderbyClass.all().orderBy('cnum desc,cstring desc'); //collection

        orderByError = "";
        entityColDesc.forEach(orderByDescendingTwoAttributsValues);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
    testOrderBy_TwoAttributsCollectionAscDesc: function() {
        var entityColAsc = ds.MyOrderbyClass.all().orderBy('cnum asc,cstring desc'); //Data class

        orderByError = "";
        entityColAsc.forEach(orderByTwoAttributsValuesWithAscFirstParamAndDescSecondParam);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//(WAK0072457 Bug)
    testOrderBy_TwoAttributsCollectionDescAsc: function() {
        var entityColDesc = ds.MyOrderbyClass.all().orderBy('cnum desc,cstring asc'); //Data class

        orderByError = "";
        entityColDesc.forEach(orderByTwoAttributsValuesWithDescFirstParamAndAscSecondParam);
        if (orderByError != "")
            Y.Assert.fail(orderByError);
    },
	//we applied the remove() methode to these class: MyClass4, ToBeRemoved, MyEmptyClass, Component and TheComposite
    //test of remove() with data
	testRemove_WithData: function() {
		ds.ToBeRemoved.remove();
		Y.Assert.areSame(0,ds.ToBeRemoved.length,"Remove failed");
		Y.Assert.areSame(100,ds.MyClass4.length,"Remove should not remove linked data");
    },
    //test remove() without data
    testRemove_WithoutData: function() {
		ds.MyEmptyClass.remove();
		Y.Assert.areSame(0,ds.MyEmptyClass.length,"Remove of empty class failed");
    },
	//test remove() on collection (WAK0075724 Bug)(JL's remarks: La collection est considéré en état indéfini, non utilisable. Pas de changement pour le moment)
    testRemove_CollectionWithData: function() {
		var myCollection = ds.MyClass7.createEntityCollection();
        var entity1 = ds.MyClass7.find("cnum=1");
        var entity2 = ds.MyClass7.find("cnum=2");
        myCollection.add(entity1);
        myCollection.add(entity2);
		myCollection.remove();
        //Y.Assert.areSame(0,myCollection.length,"remove entity collection has failed.");
		
		entity1 = ds.MyClass7.find("cnum=1");
        entity2 = ds.MyClass7.find("cnum=2");
		
		Y.Assert.isNull(entity1, "remove entity collection should remove entity from Dataclass (first entity).");
		Y.Assert.isNull(entity2, "remove entity collection should remove entity from Dataclass (second entity).");
    },
	//test of drop() with data
	testRemove_DropAliasWithData: function() {
		ds.ToBeDroped.drop();
		Y.Assert.areSame(0,ds.ToBeDroped.length,"The Empty class can't be droped");
    },
	//test drop() on collection (WAK0075724 Bug)(JL's remarks: La collection est considéré en état indéfini, non utilisable. Pas de changement pour le moment)
    testRemove_DropAliasForCollectionWithData: function() {
		var myCollection = ds.MyClass7.createEntityCollection();
        var entity1 = ds.MyClass7.find("cnum=11");
        var entity2 = ds.MyClass7.find("cnum=12");
        myCollection.add(entity1);
        myCollection.add(entity2);
		myCollection.drop();
        //Y.Assert.areSame(0,myCollection.length, "remove entity collection with drop alias has failed.");
		
		entity1 = ds.MyClass7.find("cnum=11");
        entity2 = ds.MyClass7.find("cnum=12");
		
		Y.Assert.isNull(entity1, "remove entity collection with drop alias should remove entity from Dataclass (first entity).");
		Y.Assert.isNull(entity2, "remove entity collection with drop alias should remove entity from Dataclass (second entity).");
    },
	//test remove() for composition relation (WAK0075806 Bug)
	testRemove_ForCompositionRelation: function() {
		ds.TheComposite.remove();
		Y.Assert.areSame(0,ds.Component.length,"In composition relation, the component should also be removed.");
	},
    //Start at 1
    testSetAutoSequenceNumber_StartAt1: function() {
        var entity = ds.MyNewAutoSequenceNumberClass.createEntity();
        Y.Assert.areSame(1, entity.ID, "setAutoSequenceNumber does not start at 1.");
    },
    //value 0
    testSetAutoSequenceNumber_Set0: function() {
        ds.MyAutoSequenceNumberClass.setAutoSequenceNumber(0);
        var entity = ds.MyAutoSequenceNumberClass.createEntity();
        Y.Assert.areSame(0, entity.ID, "setAutoSequenceNumber with 0 failed.");
    },
    //positive value
    testSetAutoSequenceNumber_PositiveValue: function() {
        var value = 300;
        ds.MyAutoSequenceNumberClass.setAutoSequenceNumber(value);
        var entity = ds.MyAutoSequenceNumberClass.createEntity();
        Y.Assert.areSame(value, entity.ID, "setAutoSequenceNumber with positive value failed.");
    },
    //negative value
    testSetAutoSequenceNumber_NegativeValue: function() {
        var value = -300;
        ds.MyAutoSequenceNumberClass.setAutoSequenceNumber(value);
        var entity = ds.MyAutoSequenceNumberClass.createEntity();
		entity.save();
        Y.Assert.areSame(value, entity.ID, "setAutoSequenceNumber with negative value failed.");
    },
    //change to an already used auto sequence number
    testSetAutoSequenceNumber_AlreadyUsed: function() {
		var isGood = true;
        var id = -300;
		ds.MyAutoSequenceNumberClass.setAutoSequenceNumber(id);
		try{
			var newEntity = ds.MyAutoSequenceNumberClass.createEntity();
		}
		catch(e){
			isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("setAutoSequenceNumber with already used value shouldn't generate exception.");
    },
    //
    //Existence
    testSum_ExistenceOnDataClass: function() {
        Y.Assert.isNumber(ds.MyClass1.sum('cnum'), "Existence (class) failed.");
    },
    //Existence on collection
    testSum_ExistenceOnCollection: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum = 2");
        var entity2 = ds.MyClass1.find("cnum = 8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.isNumber(myCollection.sum('cnum'), "Existence (collection) failed.");
    },
    //Syntax
    //Must fails

    //empty param
    testSum_DataClassAttributeAsEmptyString: function() {
	var isGood = true;
	try
	{
		ds.MyClass1.sum("");
		isGood = false;
	}
	catch(e){}
	if(!isGood)
        Y.Assert.fail("Syntax failed :ds.MyClass1.sum('').");
    },
    //without first param
    testSum_WithoutFirstParam: function() {
		var isGood1 = true;
		var isGood2 = true;
		try
		{
			ds.MyClass1.sum(false);
			isGood1 = false;
		}
		catch(e){}
		try
		{
			ds.MyClass1.sum("distinct");
			isGood2 = false;
		}
		catch(e){}
		if(!isGood1 || !isGood2)
		{
			if(!isGood1)
				message += "ds.MyClass1.sum(false)";
			if(!isGood1 && !isGood2)
				message += " and "
			if(!isGood2)
				message += "ds.MyClass1.sum('distinct')";
			Y.Assert.fail("Syntax : "+message+" should fail.");
		}
    },
    //bad field type
    //string
    testSum_BadAttributeParamTypeString: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.sum("name");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail( "Syntax: ds.MyClass1.sum(string) should fail or return a string value.");
    },
    //date
    testSum_BadAttributeParamTypeDate: function() {
		var isGood = true;
		try
		{
			var result = ds.MyClass1.sum("cdate");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail( "Syntax: ds.MyClass1.sum('cdate') should fail or return a date value.");
    },
    //duration
    testSum_BadAttributeParamTypeDuration: function() {
        Y.Assert.areSame(23,ds.MyClass1.sum("cduration"), "Syntax failed : ds.MyClass1.sum(duration).");
    },
    //bool
    testSum_BadAttributeParamTypeBool: function() {
		var isGood = true;
		try
		{
			ds.MyClass1.sum("cbool");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail("sum method shouldn't work with bool attribute.");
    },
    //blob
    testSum_BadAttributeParamTypeBlob: function() {
		var isGood = true;
		try
		{
			var result = ds.MyClass1.sum("cblob");
			isGood = false;
		}
		catch(e){}
		if(!isGood)
			Y.Assert.fail( "Syntax: ds.MyClass1.sum('cblob') should fail or return a date value.");
    },

    //Must success
    //bad second param
    testSum_DistinctParamWithBadValue: function() {
        Y.Assert.isNumber(ds.MyClass1.sum("cnum", "other"), "Syntax failed : ds.MyClass1.sum('cnum','other').");
    },
    //second param case sensivity
    testSum_DistinctParamCaseSensivity: function() {
        Y.Assert.isNumber(ds.MyClass1.sum("cnum", "Distinct"), "Syntax failed : ds.MyClass1.sum('cnum','Distinct').");
        Y.Assert.isNumber(ds.MyClass1.sum("cnum", "DISTINCT"), "Syntax failed : ds.MyClass1.sum('cnum','DISTINCT').");
    },
    testSum_SyntaxDistinctParamAsBool_true_AndDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.sum("cnum", true), "Syntax failed : ds.MyClass1.sum('cnum',true).");
    },
    testSum_SyntaxDistinctParamAsBool_false_AndDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.sum("cnum", false), "Syntax failed : ds.MyClass1.sum('cnum',false).");
    },
    testSum_SyntaxDistinctParamAsStringAndDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.sum("cnum", "distinct"), "Syntax failed : ds.MyClass1.sum('cnum','distinct').");
    },
    testSum_SyntaxDataClassParamAsString: function() {
        Y.Assert.isNumber(ds.MyClass1.sum("cnum"), "Syntax failed : ds.MyClass1.sum('cnum').");
    },
    testSum_SyntaxDataClassParamAsAttribute: function() {
        Y.Assert.isNumber(ds.MyClass1.sum(ds.MyClass1.cnum), "Syntax failed : ds.MyClass1.sum(ds.MyClass1.cnum).");
    },
    //end syntax tests

    //link (WAK0072036 Bug Fixed test)
    testSum_BadAttributeParamAsOtherDataClassAttribute: function() {
        var isGood1 = true;
		var isGood2 = true;
        try {
            var x = ds.MyClass1.sum(ds.MyClass2.cnum);
            isGood1 = false;
        }
        catch (err) {}
        try {
            var x = ds.MyClass1.sum(ds.MyClass1.clink.cnum);
            isGood2 = false;
        }
        catch (err) {}
        if (!isGood1 || !isGood2)
            Y.Assert.fail("sum with param as other dataclass attribute should fail.");
    },
    //Data class with attribute named 'distinct'
    testSum_DataClassAttributeNamedDistinct: function() {
        Y.Assert.isNumber(ds.MyClass2.sum("distinct"), "Data class with attribute named 'distinct' failed.");
    },

    //empty Data class (WAK0071945 Bug: Fixed test)
    testSum_DataClassWithoutData: function() {
        Y.Assert.areSame(0, ds.MyEmptyClass.sum("cnum"), "sum of empty Data class failed.");
    },
    //Data class with data
    testSum_SumOfDataClassWithData: function() {
        Y.Assert.areSame(132, ds.MyClass1.sum("cnum"), "sum of Data class failed.");
    },
    //Data class with data
    testSum_DistinctSumOfDataClassWithData: function() {
        Y.Assert.areSame(118, ds.MyClass1.sum("cnum", "distinct"), "sum of Data class failed.");
    },
    //the sum of num is > 2147483647.
    testSum_DataClassWithDataSumGreaterThan2147483647: function() {
        Y.Assert.areSame(4294967292, ds.MyClass2.sum("cnum"), "sum > 2147483647 failed.");
    },
    //collection
    testSum_CollectionWithData: function() {
        var myCollection = ds.MyClass1.createEntityCollection();
        var entity1 = ds.MyClass1.find("cnum = 2");
        var entity2 = ds.MyClass1.find("cnum = 8");
        myCollection.add(entity1);
        myCollection.add(entity2);
        Y.Assert.areSame(10, myCollection.sum('cnum'), "sum collection failed.");
    },
    //empty collection (WAK0071945 Bug)
    testSum_CollectionWithoutData: function() {
        var myEmptyCol = ds.MyClass1.createEntityCollection();
        Y.Assert.areSame(0, myEmptyCol.sum("cnum"), "empty collection failed.");
    },
	//toArray: withour parameters
    testToArray_WithoutParam: function() {
	var myArray = ds.MyClass9.toArray();
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method without parameters fail");
		}
		else
		{	
			for(var i = 0;i<10;i++)
			{
				if(myArray[i].ID != ds.MyClass9.find("ID="+i).ID)
					Y.Assert.fail("toArray method with String attirbute didn't return correct entities");
			}
		}
    },
	//toArray: Type Blob
    testToArray_TypeBlob: function() {
    },
	//toArray: Type Uuid
    testToArray_TypeUuid: function() {
    },
	//toArray: without attributes ""
    testToArray_WithoutAttributes: function() {
	var myArray = ds.MyClass9.toArray("");
		if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with an empty string fail");
		}
		else
		{	
			for(var i = 0;i<10;i++)
			{
				if(myArray[i].ID != ds.MyClass9.find("ID="+i).ID)
					Y.Assert.fail("toArray method with String attirbute didn't return correct entities");
			}
		}
    },
	//toArray: innexistent attributes
	testToArray_InnexistentAttributes: function() {
	var isGood = true;
		try{
			var myArray = ds.MyClass1.toArray("wrongAttribute");
			isGood = false;
		}
		catch(e){
		
		}
		if(!isGood)
			Y.Assert.fail("The return of toArray method with wrong attributes should not be defined");
	},
	//toArray: with attribute's path
	testToArray_PathAttribute: function() {
	var myArray = ds.MyClass1.toArray(ds.MyClass1.name,ds.MyClass1.cnum); 
	Y.Assert.areNotSame(0,myArray.length,"toArray with path to attributes has failed");
	},
	//toArray: with all kind of attributes ( Except 'image' , 'blob' and 'uuid' )
	testToArray_AllAttributesKind: function() {
	var myArray = ds.MyClass9.toArray("ID,name, cnum,cdate, cblob, cbyte,clong, cword,cuuid,cduration");
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with a list of attirbutes fail");
		}
		else
		{
			for(var i = 0;i<10;i++)
			{
				if(myArray[i].ID != ds.MyClass9.find("ID="+i).ID)
					Y.Assert.fail("toArray method with a list of attirbutes didn't return correct entities");
			}
		}
	},
	//toArray: with String attribute
	testToArray_TypeString: function() {
	var myArray = ds.MyClass9.toArray("name");
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with String attirbute fail");
		}else
		{	
			for(var i = 0;i<10;i++)
			{
				if(myArray[i].name != ds.MyClass9.find("ID="+i).name)
					Y.Assert.fail("toArray method with String attirbute didn't return correct entities");
			}
		}
	},
	//toArray: with String attribute and SortList param
	testToArray_TypeStringWithSortList: function() {
	var myArray = ds.MyClass9.toArray("name","name");
	if(myArray.length!=10)
	{
		Y.Assert.fail("toArray method with Number attirbute and SortList param fail");
	}
	else 
	{
		if(myArray[0].name != "&" || myArray[1].name != "1" || myArray[2].name != "A" || myArray[3].name != "D")
			Y.Assert.fail("toArray method with Number attirbute and SortList param didn't return correct entities");
		else
			if(myArray[4].name != "F" || myArray[5].name != "K" || myArray[6].name != "O" || myArray[7].name != "S")
				Y.Assert.fail("toArray method with Number attirbute and SortList param didn't return correct entities");
			else
				if(myArray[8].name != "Z" || myArray[9].name != "Z" )
					Y.Assert.fail("toArray method with Number attirbute and SortList param didn't return correct entities");
	}
	},
	//toArray: with Number attribute
	testToArray_TypeNumber: function() {
	var myArray = ds.MyClass9.toArray("cnum");
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with Number attirbute fail");
		}else
		{
			for(var i = 0;i<10;i++)
			{
				if(myArray[i].cnum != ds.MyClass9.find("ID="+i).cnum)
					Y.Assert.fail("toArray method with Number attirbute didn't return correct entities");
			}
		}
	},
	//toArray: with Number attribute and SortList param
	testToArray_TypeNumberWithSortList: function() {
		var myArray = ds.MyClass9.toArray("cnum","cnum");
		if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with Number attirbute and SortList param fail");
		}
		else
		{		
			for(var i = 1;i<9;i++)
			{
				if(myArray[i].cnum != (i+1))
					Y.Assert.fail("toArray method with Number attirbute and SortList param didn't return correct entities");
			}
			if(myArray[0].cnum != "-36" || myArray[9].cnum != "1000")
			{
				Y.Assert.fail("toArray method with Number attirbute and SortList param didn't return correct entities");
			}
		}
	},
	//toArray: with Date attribute 
	testToArray_TypeDate: function() {
		var isGood = true;
		var myArray = ds.MyClass9.toArray("cdate");
		for(var i = 0; i<10;i++)
		{
			var entity = ds.MyClass9.find("ID="+i);
			if(entity.cdate.getTime() != myArray[i].cdate.getTime())
				isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray method with Date attirbute fail");
	},
	//toArray: with Date attribute and SortList param
	testToArray_TypeDateWithSortList: function() {
		var isGood = true;
		var ids = [0,2,1,3,4,5,7,8,9,6];
		var array = ds.MyClass9.toArray("ID,cdate","cdate");
		for(var i = 0; i<10;i++)
		{
			if(array[i].ID != ids[i])
				isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray method with Date attirbute and SortList param fail."+message);
	},
	//toArray: with Long attribute
	testToArray_TypeLong: function() {
		var myArray = ds.MyClass9.toArray("clong");
		for( var i = 0;i<10;i++)
		{
			if(myArray[i].clong != ds.MyClass9.find("ID="+i).clong)
				Y.Assert.fail("toArray method with Long attirbute fail");
		}
	},
	//toArray: with Long attribute and SortList param
	testToArray_TypeLongWithSortList: function() {
		var isGood = true;
		var myArray = ds.MyClass9.toArray("clong","clong");
		for( var i = 0;i<2;i++)
		{
			if(myArray[i].clong != i)
				isGood = false;
		}
		for( var i = 2;i<9;)
		{
			if(myArray[i].clong != (++i))
				isGood = false;
		}
		if(myArray[9].clong != 13)
			isGood= false;
		if(!isGood)
			Y.Assert.fail("toArray method with Date attirbute and SortList param fail");
	},
	//toArray: with Byte attribute
	testToArray_TypeByte: function() {
		var myArray = ds.MyClass9.toArray("cbyte");
		for( var i = 0;i<10;i++)
		{
			if(myArray[i].cbyte != ds.MyClass9.find("ID="+i).cbyte)
				Y.Assert.fail("toArray method with Byte attirbute fail");
		}
	},
	//toArray: with Byte attribute and SortList param
	testToArray_TypeByteWithSortList: function() {
		var myArray = ds.MyClass9.toArray("cbyte","cbyte");
		for( var i = 0;i<10;i++)
		{
			if(i==0)
			{
				if(myArray[0].cbyte != -2)
					Y.Assert.fail("toArray method with Byte attirbute and SortList param fail");
				continue;
			}
			if(i==9)
			{
				if(myArray[9].cbyte != 30)
					Y.Assert.fail("toArray method with Byte attirbute and SortList param fail");
				continue;
			}
			if(myArray[i].cbyte != ds.MyClass9.find("ID="+i).cbyte)
				Y.Assert.fail("toArray method with Byte attirbute and SortList param fail");
		}
	},
	//toArray: with Duration attribute
	testToArray_TypeDuration: function() {
			var myArray = ds.MyClass9.toArray("cduration");
			for( var i = 0;i<10;i++)
			{
				if(myArray[i].cduration != ds.MyClass9.find("ID="+i).cduration)
					Y.Assert.fail("toArray method with Duration attirbute fail");
			}
	},
	//toArray: with Duration attribute and SortList param
	testToArray_TypeDurationWithSortList: function() {
	var myArray = ds.MyClass9.toArray("cduration","cduration");
		for( var i = 9;i>=0;i--)
		{
			if(myArray[9-i].cduration != ds.MyClass9.find("ID="+i).cduration)
				Y.Assert.fail("toArray method with Duration attirbute and SortList param fail");
		}
	},
	//toArray: with Word attribute
	testToArray_TypeWord: function() {
			var myArray = ds.MyClass9.toArray("cword");
			for( var i = 0;i<10;i++)
			{
				if(myArray[i].cword != ds.MyClass9.find("ID="+i).cword)
					Y.Assert.fail("toArray method with Word attirbute fail");
			}
	},
	//toArray: with Word attribute and SortList param
	testToArray_TypeWordWithSortList: function() {
	var myArray = ds.MyClass9.toArray("cword","cword");
		for( var i = 9 ; i>=0 ; i--)
		{
			if(myArray[9-i].cword != ds.MyClass9.find("ID="+i).cword)
				Y.Assert.fail("toArray method with Word attirbute and SortList param fail");
		}
	},
	//toArray: with empty string and restriction parametres (skip,top)
    testToArray_WithRestrictionParameters: function() {
	var myArray = ds.MyClass9.toArray("",0,5);
	if(myArray.length!=5)
		{
			Y.Assert.fail("toArray method with restriction parametres fail");
		}else if(myArray[0].cnum != 1000 || myArray[0].clong!=0 || myArray[0].cduration!=9)
		{
			Y.Assert.fail("toArray method with restriction parameters didn't return correct values");
		}else if(myArray[4].cnum != 6 || myArray[4].clong!=5 || myArray[4].cduration!=5)
		{
			Y.Assert.fail("toArray method with restriction parameters didn't return correct values");
		}
    },
	//toArray: with empty string and with key as string
    testToArray_WithoutAttributesWithKeyAsString: function() {
	var myArray = ds.MyClass9.toArray("", "withkey");
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with key as string fail");
		}else if(myArray[0].__KEY.ID !=0 || myArray[0].__KEY.__STAMP !=1  || myArray[0].cnum != 1000 || myArray[0].clong!=0 || myArray[0].cduration!=9)
		{
			Y.Assert.fail("toArray method with key as string didn't return correct values");
		}else if(myArray[9].__KEY.ID !=9 || myArray[9].__KEY.__STAMP !=1  || myArray[9].cnum != -36 || myArray[9].clong!=8 || myArray[9].cduration!=0)
		{
			Y.Assert.fail("toArray amethod with restriction parametres didn't return correct values");
		}
    },
	//toArray: with empty string and with key as boolean (true)
    testToArray_WithoutAttributesWithKeyAsBoolean: function() {
	var myArray = ds.MyClass9.toArray("", true);
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with key as boolean fail");
		}else if(myArray[0].__KEY.ID !=0 || myArray[0].__KEY.__STAMP !=1 || myArray[0].cnum != 1000 || myArray[0].clong!=0 || myArray[0].cduration!=9)
		{
			Y.Assert.fail("toArray method with key as boolean didn't return correct values");
		}else if(myArray[9].__KEY.ID !=9 || myArray[9].__KEY.__STAMP !=1 || myArray[9].cnum != -36 || myArray[9].clong!=8 || myArray[9].cduration!=0)
		{
			Y.Assert.fail("toArray method with key as boolean didn't return correct values");
		}
    },
	//toArray: with empty string and without key as boolean (false)
    testToArray_WithoutAttributesWithoutKeyAsBoolean: function() {
	var myArray = ds.MyClass9.toArray("", false);
	if(myArray.length!=10)
		{
			Y.Assert.fail("toArray method with key as boolean fail");
		}else if(myArray[0].__KEY !=undefined || myArray[0].cnum != 1000 || myArray[0].clong!=0 || myArray[0].cduration!=9)
		{
			Y.Assert.fail("toArray method with key as boolean didn't return correct values");
		}else if(myArray[9].__KEY !=undefined || myArray[9].cnum != -36 || myArray[9].clong!=8 || myArray[9].cduration!=0)
		{
			Y.Assert.fail("toArray method with key as boolean didn't return correct values");
		}
    },
	//toArray: empty string with key as string and restriction parametres (skip,top) (WAK0075806 Bug)
    testToArray_RestrictionParametersAndWithkey: function() {
	var myArray = ds.MyClass9.toArray("","withkey",0,5);
		if(myArray.length!=5)
		{
			Y.Assert.fail("the restriction parameters of toArray do not work when we want to include the internal ID of each entity");
		}
		else 
		{
			for(var i = 0 ; i<5; i++)
			{
				if(myArray[i].__KEY.ID != i)
				{
					Y.Assert.fail("toArray method with restriction parametres and with key as String didn't return correct values");
					break;
				}
			}
		}
    },
	//toArray: wrong values of (skip, top) skip of them is negative
	testToArray_IfSkipIsNegative: function() {
	var myArray = ds.MyClass9.toArray("",-2,6);
	Y.Assert.areSame(6,myArray.length,"toArray with negative value of 'skip' paramter fail");
	},
	//toArray: wrong values of (skip, top) both of them are negative
	testToArray_IfTopIsNegative: function() {
	var myArray = ds.MyClass9.toArray("",2,-6);
	Y.Assert.areSame(8,myArray.length,"toArray with negative value of 'top' paramter fail");
	},
	//toArray: wrong values of (skip, top), both are negative
	testToArray_IfSkipAndTopAreNegative: function() {
	var myArray = ds.MyClass9.toArray("",-2,-4);
	Y.Assert.areSame(10,myArray.length,"toArray with negative values of 'skip' and 'top' paramters fail");
	},
	//toArray: one of the restriction parameters is missing
	testToArray_OneOfThemIsMissing: function() {
	var myArray = ds.MyClass9.toArray("",4);
		if(myArray.length!=6)
		{
			Y.Assert.fail("toArray with one of the restriction paramters is missing fail");
		}
		if(myArray[0].ID != 4)
		{
			Y.Assert.fail("toArray with one of the restriction paramters is missing didn't return correct values");
		}
	},
	//toArray: where 'skip' is greater than length of the array
	testToArray_SkipIsGreatherThanDataClassLength: function() {
	var myArray = ds.MyClass9.toArray("",12,6);
	Y.Assert.areSame(0,myArray.length,"toArray with 'Skip' parameter greather than the dataclass's length fail");
	},
	//toArray: test default value of sortList (asc)
	testToArray_SortListDefaultValue: function() {
	var myArray  = ds.MyClass9.toArray("","ID");
	if(myArray[0].ID!=0 || myArray[9].ID!=9 || myArray[5].cduration!=4)
		Y.Assert.fail("toArray test: default value of SortList do not work");
	},
	//toArray: sortList wtih "desc" key
	testToArray_SortListWithDescKey: function() {
		var myArray  = ds.MyClass9.toArray("","ID desc");
		for( var i = 0 ; i<10 ; i++)
		{
			var j = 9-i;
			if(myArray[i].ID != ds.MyClass9.find("ID="+j).ID)
				Y.Assert.fail("SortList with 'desc' key fail");
		}	
	},
	//toArray: test sortList by path of relation attributes
	testToArray_SortListByPathOfRelationAttributes: function() {
		var myArray  = ds.People.toArray("ID,name,sexe,people_father.ID,people_father.name","people_father.name desc");
		var isGood = true;
		var names = "AZCDSFGHJ";
		for(var k = 0 ; k<9 ; k++){
			if(myArray[k].ID == k && myArray[k].name==names.charAt(k) && myArray[k].sexe==(k%2==0?"M":"F"))
			{
				if(k==0){
					var IDs= new Array(4,5,3,2);
					for(var j=0;j<4;j++) 
						if(myArray[k].people_father[j].ID!=IDs[j] || myArray[k].people_father[j].name != names.charAt(IDs[j])) isGood = false;
				}
				if(k==2) if(myArray[2].people_father[0].ID !=6 || myArray[2].people_father[0].name != "G") isGood = false;
				if(k==4) if(myArray[4].people_father[0].ID !=7 || myArray[4].people_father[0].name != "H") isGood = false;
				if(k==6) if(myArray[6].people_father[0].ID !=8 || myArray[6].people_father[0].name != "J") isGood = false;
				
			}else isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray : test SortList by path of relation attributes fail");
	},
	//toArray: test sortList many path of relation attributes
	testToArray_SortListByManyPathOfRelationAttributes: function() {
		var myArray  = ds.People.toArray("ID,name,sexe,people_father.ID,people_mother.ID,people_father.name,people_mother.name","people_mother.name asc , people_father.ID desc");
		var isGood = true;
		var names = "AZCDSFGHJ";
		for(var k = 0 ; k<9 ; k++){
			if(myArray[k].ID == k && myArray[k].name==names.charAt(k) && myArray[k].sexe==(k%2==0?"M":"F"))
			{
				if(k==0){
					for(var i = 5, j=0;i>1;j++,i--) 
						if(myArray[k].people_father[j].ID!=i || myArray[k].people_father[j].name != names.charAt(myArray[k].people_father[j].ID)) isGood = false;
				}
				if(k==1){
					var IDs= new Array(2,3,5,4);
					for(var j = 0 ; j<4;j++)
						if(myArray[k].people_mother[j].ID!=IDs[j] || myArray[k].people_mother[j].name != names.charAt(IDs[j])) isGood = false;
				}
				if(k==2) if(myArray[2].people_father[0].ID !=6 || myArray[2].people_father[0].name != "G") isGood = false;
				if(k==3) if(myArray[3].people_mother[0].ID !=6 || myArray[3].people_mother[0].name != "G") isGood = false;
				if(k==4) if(myArray[4].people_father[0].ID !=7 || myArray[4].people_father[0].name != "H") isGood = false;
				if(k==5) if(myArray[5].people_mother[0].ID !=7|| myArray[5].people_mother[0].name != "H") isGood = false;
				if(k==6) if(myArray[6].people_father[0].ID !=8 || myArray[6].people_father[0].name != "J") isGood = false;
				if(k==7) if(myArray[7].people_mother[0].ID !=8 || myArray[7].people_mother[0].name != "J") isGood = false;
							
			} else isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("test SortList of toArray with many path of relation attributes fail");
	},
	//toArray: test link niveau 2 
	//Dans la class People, on a un exemple( qui n'est pas realiste !) de famille. C'est juste pour tester l'acces aux niveaux superieurs des liens. Pour cela on va appeler
	//la methode toArray en passant en parametres des liens de diffÃ©rents niveaux
	testToArray_LevelTwoAttributes: function() {
		var myArray = ds.People.toArray("ID,name,sexe,father.name,mother.name,father.father.name,mother.father.name,mother.mother.name,father.mother.name,father.father.father.name,mother.father.father.name,father.father.mother.name,mother.father.mother.name,father.mother.mother.name,mother.mother.mother.name,father.mother.father.name,mother.mother.father.name");
		var isGood = true;
		var names = "AZCDSFGHJ";
		for(var k = 0 ; k<9 ; k++){
			if(myArray[k].ID == k && myArray[k].name==names.charAt(k) && myArray[k].sexe==(k%2==0?"M":"F")){
				switch(k){
					case 2,3,4,5:
						if(myArray[k].father.name != "A" || myArray[k].mother.name != "Z" )
							isGood =false;
						break;
					case 6:
						if(myArray[k].father.name != "C" || myArray[k].mother.name != "D" )
							isGood =false;
						break;
					case 7:
						if(myArray[k].father.name != "S" || myArray[k].mother.name != "F" )
							isGood =false;
						break;
					case 8:
						if(myArray[k].father.name != "G" || myArray[k].mother.name != "H" )
							isGood =false;
						break;
					}
			}
			else isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray with level two attributes fail");
	},
	//toArray: test 
	testToArray_LimitNumberOfEntities: function() {
		var myArray = ds.People.toArray("ID,name,sexe,people_father:3,people_mother");
		var isGood = true;
		var names = "AZCDSFGHJ";
		for(var k = 0 ; k<9 ; k++){
			if(myArray[k].ID == k && myArray[k].name==names.charAt(k) && myArray[k].sexe==(k%2==0?"M":"F")){
				if(k==0)
				{
					if(myArray[k].people_father.length ==3 )
					{
						if(myArray[k].people_father[0].ID != 2 || myArray[k].people_father[1].ID != 3 || myArray[k].people_father[2].ID != 4 )
							isGood = false;
					} else isGood = false;
				}
				if(k==1)
				{
					if(myArray[k].people_mother.length ==4 )
					{
						if(myArray[k].people_mother[0].ID != 2 || myArray[k].people_mother[1].ID != 3 || myArray[k].people_mother[2].ID != 4 || myArray[k].people_mother[2].ID != 4)
							isGood = false;
					} else isGood = false;
				}
			} else isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray with limit number of entities fail");
	},
	//toArray(image): Empty datastore with image attribute
	testToArray_EmptyDataClassWithImageAttribute: function(){
		var isGood = true;
		var array = new Array();
		try{
			array = ds.MyClassForImageTest.toArray();
		}
		catch(e){
			isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray applied to a dataclass with image attaribute and without data FAIL");
	},
	//toArray(image): datastore with images( attributes should not be null )
	testToArray_DataClassWithImageAttribute_ValuesShouldNotBeNull: function(){
		var isGood = true;
		var path = application.getFolder("path");
		var path1 = path + "img/wak0.png";
		var path2 = path + "img/wak1.jpg";
		var myImage1 = loadImage(path1);
		var myImage2 = loadImage(path2);
		var entity = new ds.MyClassForImageTest({
			cname	:"entity1",
			cimage	:myImage1
			});
		entity.save();
		var entity2 = new ds.MyClassForImageTest({
			cname	:"entity2",
			cimage	:myImage2
			});
		entity2.save();
		
		var array = new Array();
		try{
			array = ds.MyClassForImageTest.toArray();
		}catch(e){
			isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("toArray applied to a dataclass with image attaribute and with data FAIL");
		else
			if(array[0].cimage == null  || array[1].cimage == null)
				Y.Assert.fail("toArray applied to a dataclass with image attaribute don't return correct images");
	},
	//toArray(image): datastore with images
	testToArray_DatastoreWithImageAttribute: function(){
		var array = new Array();
		array = ds.MyClassForImageTest.toArray();
		var size1 = ds.MyClassForImageTest.find("ID=1").cimage.size;
		var size2 = ds.MyClassForImageTest.find("ID=2").cimage.size;
		var height1 = ds.MyClassForImageTest.find("ID=1").cimage.height;
		var height2 = ds.MyClassForImageTest.find("ID=2").cimage.height;
		var width1 = ds.MyClassForImageTest.find("ID=1").cimage.width;
		var width2 = ds.MyClassForImageTest.find("ID=2").cimage.width;
		if( array[0].cimage.size != size1  || array[1].cimage.size != size2	|| array[0].cimage.width !=  width1 || array[1].cimage.width !=  width2 || array[0].cimage.height != height1 || array[1].cimage.height != height2)
			Y.Assert.fail("toArray applied to a dataclass with image attaribute don't return correct images ");
	},
    //test add for an unsorted entity collection
	testAdd_UnsortedEntityCollection: function(){
		var entityColl = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1);
		Y.Assert.areSame(2,entityColl.length,"add method for an unsorted entity collection fail");
	},
	//test add for a sorted entity collection
	testAdd_SortedEntityCollection: function(){
		var entityColl = ds.MyClass1.createEntityCollection("KeepSorted");
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1);
		Y.Assert.areSame(2,entityColl[0].ID,"add method for an unsorted entity collection fail");
	},
	//test second param of add mathode
	testAdd_SecondParamAsFalseForUnsortedCollection_Bool: function(){
		var entityColl = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1,false);
		Y.Assert.areSame(2,entityColl.length,"Second param as false for unsorted collection fail");
	},
	//test second param of add mathode
	testAdd_SecondParamAsTrueForUnsortedCollection_Bool: function(){
		var entityColl = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1,true);
		Y.Assert.areSame(2,entityColl[0].ID,"Second param as true for unsorted collection fail");
	},
	//test second param of add mathode
	testAdd_AtTheEndParamAsFalseForSortedCollection_Bool: function(){
		var entityColl = ds.MyClass1.createEntityCollection("KeepSorted");
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1,false);
		Y.Assert.areSame(2,entityColl.length,"Second param as false for sorted collection fail");
	},
	//test second param of add mathode
	testAdd_SecondParamAsTrueForSortedCollection_Bool: function(){
		var entityColl = ds.MyClass1.createEntityCollection("KeepSorted");
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1,true);
		Y.Assert.areSame(2,entityColl[0].ID,"Second param as true for sorted collection fail");
	},
	//test second param of add mathode
	testAdd_SecondParamAsFalseForUnsortedCollection_String: function(){
		var entityColl = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1,"AnyWhere");
		Y.Assert.areSame(2,entityColl.length,"Second param as false for unsorted collection fail");
	},
	//test second param of add mathode
	testAdd_SecondParamAsTrueForUnsortedCollection_String: function(){
		var entityColl = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=2");
		entityColl.add(entity2);
		entityColl.add(entity1,"AtTheEnd");
		Y.Assert.areSame(2,entityColl[0].ID,"Second param as true for unsorted collection fail");
	},
	//test second param of add mathode
	testAdd_AtTheEndParamAsFalseForSortedCollection_String: function(){
		var entityColl = ds.MyClass1.createEntityCollection("KeepSorted");
		var entity1 = ds.MyClass1.find("ID=2");
		var entity2 = ds.MyClass1.find("ID=1");
		entityColl.add(entity1);
		entityColl.add(entity2,"AnyWhere");
		Y.Assert.areSame(2,entityColl.length,"Second param as false for sorted collection fail");
	},
	//test second param of add mathode
	testAdd_SecondParamAsTrueForSortedCollection_String: function(){
		var entityColl = ds.MyClass1.createEntityCollection("KeepSorted");
		var entity1 = ds.MyClass1.find("ID=2");
		var entity2 = ds.MyClass1.find("ID=1");
		entityColl.add(entity1);
		entityColl.add(entity2,"AtTheEnd");
		Y.Assert.areSame(2,entityColl[0].ID,"Second param as true for sorted collection fail");
	},
	//test second param as 'true' should transform unsorted collection to a sorted collection
	testAdd_UnsortedToSortedCollection: function(){
		var isGood = true;
		var array = [2,1,4,5,3];
		var entityColl = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=2");
		var entity2 = ds.MyClass1.find("ID=1");
		var entity3 = ds.MyClass1.find("ID=3");
		var entity4 = ds.MyClass1.find("ID=4");
		var entity5 = ds.MyClass1.find("ID=5");
		entityColl.add(entity1);
		entityColl.add(entity2);
		entityColl.add(entity4,true);
		entityColl.add(entity5);
		entityColl.add(entity3);
		for(var i= 2;i<5;i++)
			if(entityColl[i].ID!=array[i])
				isGood = false;
		if(!isGood)
			Y.Assert.fail("Second didn't transform unsorted collection to a sorted collection");
	},
	//test duplicated entity for sorted entity collection ( should not be duplicated )
	testAdd_TestDuplication: function(){
		var coll = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=1");
		coll.add(entity1);
		coll.add(entity2);
		Y.Assert.areSame(1,coll.length,"add method shouldn't duplicat entities in the entity collection");
	},
	//test duplicated entity for sorted entity collection ( should not be duplicated )
	testAdd_TestDuplicationWithSecondParam: function(){
		var coll = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		var entity2 = ds.MyClass1.find("ID=1");
		coll.add(entity1);
		coll.add(entity2,"AtTheEnd");
		Y.Assert.areSame(2,coll.length,"add method should duplicat entities in a sorted entity collection.");
	},
	//test coll1 and coll2 are empty.
	testAnd_BothAreEmpty: function(){
		var coll1 = ds.MyClass1.createEntityCollection();
		var coll2 = ds.MyClass1.createEntityCollection();
		var coll3 = coll1.and(coll2);
		Y.Assert.areSame(0,coll3.length,"add of two empty collection should return an empty collection.");
	},
	//test collection is empty.
	testAnd_EmptyCollection: function(){
		var coll1 = ds.MyClass1.createEntityCollection();
		var coll2 = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		coll1.add(entity1);
		var coll3 = coll1.and(coll2);
		Y.Assert.areSame(0,coll3.length,"add of two empty collection should return an empty collection.");
	},
	//test param is empty.
	testAnd_ParamIsEmpty: function(){
		var coll1 = ds.MyClass1.createEntityCollection();
		var coll2 = ds.MyClass1.createEntityCollection();
		var entity1 = ds.MyClass1.find("ID=1");
		coll2.add(entity1);
		var coll3 = coll1.and(coll2);
		Y.Assert.areSame(0,coll3.length,"add of two empty collection should return an empty collection.");
	},
	//test param is empty.
	testAnd_FromIncompatibleDataclass: function(){
		var isGood = false;
		var coll1 = ds.AddCollection1.createEntityCollection();
		var coll2 = ds.AddCollection2.createEntityCollection();
		var entity1 = ds.AddCollection1.find("ID=1");
		var entity2 = ds.AddCollection2.find("ID=1");
		coll1.add(entity1);
		coll2.add(entity2);
		try{
			var coll3 = coll1.and(coll2);
		}
		catch(e){
			isGood = true;
		}
		if(!isGood)
			Y.Assert.fail("and method applied to incompatible dataclass should generate exceptionf");
	},
	//
    testToString: function() {
        Y.Assert.areSame("MyClass1", ds.MyClass1.toString(), "toString failed.");
    }
    //
};