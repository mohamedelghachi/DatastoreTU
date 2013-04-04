

var testCase = {
    name: "Datastore test(testsOfQueryMethod)",
    
        _should: {
        ignore: {
			testQuery_WrongArrayOfString1: true, // To be discussed
			testQuery_WrongArrayOfString2: true, // To be discussed
			testQuery_ArrayOfBytes: true, // fixed bug
			testQuery_ArrayOfLongs: true, // fixed bug
			testQuery_ArrayOfStings: true, //fixed bug
        }
    },
	//test query: Array of booleans with placeholders
	testQuery_ArrayOfBooleansAndPlaceholders_false: function() {
		var message = "";
		var array = [false] ;
		var coll = ds.MyClass_QueryTests.query("cbool in :1",array);
		if(coll.length == 4)
		{
			for(var i = 0 ; i<4 ; i++ )
			{
				if(coll[i].cbool != false )
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
			Y.Assert.fail("query method with booleans array and placeholders fail "+message);
	},
	//test query: Array of booleans with placeholders
	testQuery_ArrayOfBooleansAndPlaceholders_true: function() {
		var message = "";
		var array = [true] ;
		var coll = ds.MyClass_QueryTests.query("cbool in :1",array);
		if(coll.length == 6)
		{
			for(var i = 0 ; i<6 ; i++ )
			{
				if(coll[i].cbool != true)
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
			Y.Assert.fail("query method with booleans array and placeholders fail "+message);
	},
	//test query: Array of bytes with placeholders
	testQuery_ArrayOfBytesAndPlaceholders: function() {
		var message = "";
		var array = [-1,0,7] ;
		var coll = ds.MyClass_QueryTests.query("cbyte in :1",array);
		if(coll.length == 5)
		{
			for(var i = 0 ; i<5 ; i++ )
			{
				if(coll[i].cbyte != "-1" && coll[i].cbyte != "0" && coll[i].cbyte != "7" )
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
			Y.Assert.fail("query method with bytes array and placeholders fail "+message);
	},
	//test query: Array of durations with placeholders
	testQuery_ArrayOfDurationsAndPlaceholders: function() {
		var message = "";
		var array = [2,10,19] ;
		var coll = ds.MyClass_QueryTests.query("cduration in :1",array);
		if(coll.length == 4)
		{
			for(var i = 0 ; i<4 ; i++ )
			{
				if(coll[i].cduration != "2" && coll[i].cduration != "10" && coll[i].cduration != "19" )
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
			Y.Assert.fail("query method with durations array and placeholders fail "+message);
	},
	//test query: Array of longs with placeholders
	testQuery_ArrayOfLongsAndPlaceholders: function() {
		var message = "";
		var array = [5,0,-5000] ;
		var coll = ds.MyClass_QueryTests.query("clong in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].clong != "5" && coll[i].clong != "0" && coll[i].clong != "-5000" )
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
			Y.Assert.fail("query method with longs array and placeholders fail "+message);
	},
	//test query: Array of numbers with placeholders
	testQuery_ArrayOfNumbersAndPlaceholders: function() {
		var message = "";
		var array = ['12','123','314'];
		var coll = ds.MyClass_QueryTests.query("cnum in :1",array);
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].cnum != "12" && coll[i].cnum != "123" && coll[i].cnum != "314" )
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
	testQuery_ArrayOfStingsAndPlaceholders: function() {
		var message = "";
		var array = ['Zza','ba','toto'] ;
		var coll = ds.MyClass_QueryTests.query("name in :1",array);
		if(coll.length == 5)
		{
			for(var i = 0 ; i<5 ; i++ )
			{
				if(coll[i].name != "toto" && coll[i].name != "ba" && coll[i].name != "Zza" )
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
		var array = ["Zza","ba","toto"] ;
		var coll = ds.MyClass_QueryTests.query("name in :1",array);
		if(coll.length == 5)
		{
			for(var i = 0 ; i<5 ; i++ )
			{
				if(coll[i].name != "toto" && coll[i].name != "ba" && coll[i].name != "Zza" )
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
	//test should not work: wrong array of string.
	testQuery_WrongArrayOfString1: function() {
		var isGood = false;
		try
		{
			var coll = ds.MyClass_QueryTests.query("name in 'toto'");
		}
		catch(e)
		{
			isGood = true;
		}
		if(!isGood)
		{
			Y.Assert.fail("Query with wrong array should not work");
		}
	},
	//test should not work: wrong array of string.
	testQuery_WrongArrayOfString2: function() {
		var isGood = false;
		try
		{
			var coll = ds.MyClass_QueryTests.query("name in ['toto'");
		}
		catch(e)
		{
			isGood = true;
		}
		if(!isGood)
		{
			Y.Assert.fail("Query with wrong array should not work");
		}
	},
	//test query: Array and conjunction with placeholders
	testQuery_ArrayAndConjunction1: function() {
		var message = "";
		var arr = [];
		for( var i=1 ; i<7 ; i++)
			{
				arr.push(i * 2 -1);
			}
		var coll = ds.MyClass_QueryTests.query( "ID in :1 and (name = :2 or name = :3)", arr, "toto" , "k" );
		if(coll.length == 3)
		{
			for(var i = 0 ; i<3 ; i++ )
			{
				if(coll[i].ID%2 != 1 || (coll[i].name != "toto" && coll[i].name != "k" ) )
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
			Y.Assert.fail("query method with longs array fail "+message);
	},
	//test query: Array and conjunction with placeholders
	testQuery_ArrayAndConjunction2: function() {
		var message = "";
		var arr = [12,123,314] ;
		var coll = ds.MyClass_QueryTests.query( "cnum in :1 and clong >= :2",arr,0);
		if(coll.length == 2)
		{
			for(var i = 0 ; i<2 ; i++ )
			{
				if(coll[i].cnum != 12 && coll[i].cnum != 123 && coll[i].cnum != 314 )
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
			Y.Assert.fail("query method with longs array fail "+message);
	},
	//testQuery: type boolean
    testQuery_TypeBool_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool > false");
		if(col.length == 6 )
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
		//testQuery: type boolean
    testQuery_TypeBool_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool gt false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
		//testQuery: type boolean
    testQuery_TypeBool_GreatThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool> :1","false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
		//testQuery: type boolean
    testQuery_TypeBool_GreatThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col= ds.MyClass_QueryTests.query("cbool gt :1","false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_GreatOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool >= false");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbool < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_GreatOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool gteq false");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbool < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_GreatOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool gte false");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbool < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_GreatOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool >= :1","false");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbool < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_GreatOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool gteq :1","false");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbool < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_GreatOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool gte :1","false");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbool < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool < true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool >= true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool lt true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool >= true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool < :1","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool >= true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool lt :1","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool >= true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool <= false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool > false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool lteq false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool > false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool lte false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool > false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool <= :1","false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool > false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool lteq :1","false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool > false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_LessOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool lte :1","false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool > false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_EqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool = true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_EqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool eq true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_EqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool like true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_EqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool = :1","true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_EqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool eq :1","true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_EqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool like :1","true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool == true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyEqualTo_Placeholder1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool is true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyEqualTo_Placeholder2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool eqeq true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool== :1","true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyEqualTo_Placeholder1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool is :1","true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyEqualTo_Placeholder2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool eqeq :1","true");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool != true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool # true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_NotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool != :1" , "true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_NotEqualTo_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool # :1" , "true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool !== false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool nene false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool isnot false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool ## false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool !== :1" , "false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool nene :1" , "false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col= ds.MyClass_QueryTests.query("cbool isnot :1" , "false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type boolean
    testQuery_TypeBool_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbool ## :1" , "false");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a boolean attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte > 0");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte gt 0");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte > :1","0");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte gt :1","0");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte <= 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte >= 0");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbyte < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte gteq 0");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbyte < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte gte 0");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbyte < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte>= :1","0");
		if(col.length == 10 )
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbyte < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte gteq :1","0");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbyte < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_GreatOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte gte :1","0");
		if(col.length == 10)
		{
			for(var i=0;i<10;i++)
			{
				if(col[i].cbyte < 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte < 3");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte >= 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte lt 3");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte >= 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte< :1","3");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte >= 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte lt :1","3");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cbyte >= 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte <= 3");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte > 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte lteq 3");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte > 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte lte 3");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte > 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte <= :1","3");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte > 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte lteq :1","3");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte > 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_LessOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte lte :1","3");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte > 3)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_EqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte=0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_EqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte eq 0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_EqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte like 0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_EqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte = :1","0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_EqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte eq :1","0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_EqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte like :1","0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte == 0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0 )
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte is 0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte eqeq 0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte== :1","0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte is :1","0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte eqeq :1","0");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cbyte != 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte != 0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte # 0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte != :1" , "0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte # :1" , "0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte !== 0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte nene 0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte isnot 0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte ## 0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte !== :1","0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte nene :1" , "0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte isnot :1" , "0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type byte
    testQuery_TypeByte_StrictlyNotEqualTo_AltKeyword3_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cbyte ## :1" , "0");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cbyte == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a byte attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration > 10");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration <= 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration gt 10");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration <= 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration > :1","10");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration <= 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration gt :1","10");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration <= 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration>=10");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration < 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration gteq 10");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration < 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatOrEqual_AltKeyWord2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration gte 10");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration < 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration>= :1","10");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration < 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration gteq :1","10");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration < 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_GreatOrEqual_AltKeyWord2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration gte :1","10");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration < 10)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration < 7");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration >= 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail "+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration lt 7");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration >= 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail "+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessThan_Symbol_Placholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration< :1","7");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration >= 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail "+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessThan_AltKeyword_Placholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration lt :1","7");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cduration >= 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail "+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration<=7");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration > 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration lteq 7");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration > 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration lte 7");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration > 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration<= :1","7");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration > 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration lte :1","7");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration > 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_LessOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration lte :1","7");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cduration > 7)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_EqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration=20");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_EqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration eq 20");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_EqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration like 20");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_EqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration= :1","20");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_EqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration eq :1","20");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_EqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration like :1","20");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration==2");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration is 2");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration eqeq 2");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration== :1","2");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration is :1","2");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration eqeq :1","2");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cduration != 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration != 20");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration # 20");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_NotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration != :1" , "20");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_NotEqualTo_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration # :1" , "20");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 20)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration !== 2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration nene 2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration isnot 2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration ## 2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration !== :1" , "2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration nene :1" , "2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration isnot :1" , "2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type duration
    testQuery_TypeDuration_StrictlyNotEqualTo_AltKeyword3_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cduration ## :1" , "2");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cduration == 2)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a duration attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate > 2010-01-01T00:00:00.000Z");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cdate <= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate gt 2010-01-01T00:00:00.000Z");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cdate <= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate > :1","2010-01-01T00:00:00.000Z");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cdate <= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate gt :1","2010-01-01T00:00:00.000Z");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cdate <= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate>=2010-01-01T00:00:00.000Z");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cdate < "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate gteq 2010-01-01T00:00:00.000Z");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cdate < "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate gte 2010-01-01T00:00:00.000Z");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cdate < "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate>= :1","2010-01-01T00:00:00.000Z");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cdate < "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate gteq :1","2010-01-01T00:00:00.000Z");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cdate < "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_GreatOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate gte :1","2010-01-01T00:00:00.000Z");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cdate < "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate < 2010-01-01T00:00:00.000Z");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cdate >= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail "+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate lt 2010-01-01T00:00:00.000Z");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cdate >= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail "+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate< :1","2010-01-01T00:00:00.000Z");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cdate >= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail "+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate lt :1","2010-01-01T00:00:00.000Z");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cdate >= "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail "+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate <= 2010-01-01T00:00:00.000Z");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cdate > "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate lteq 2010-01-01T00:00:00.000Z");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cdate > "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate lte 2010-01-01T00:00:00.000Z");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cdate > "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate<= :1","2010-01-01T00:00:00.000Z");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cdate > "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate lteq :1","2010-01-01T00:00:00.000Z");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cdate > "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_LessOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate lte :1","2010-01-01T00:00:00.000Z");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].cdate > "2010-01-01T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_EqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate=2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_EqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate eq 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_EqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate like 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_EqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate= :1","2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_EqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate eq :1","2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_EqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate like :1","2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate == 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate is 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate eqeq 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate == :1"," 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate is :1"," 2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate eqeq :1","2005-05-05T00:00:00.000Z");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cdate < "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate != 2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate # 2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_NotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate != :1" , "2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_NotEqualTo_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate # :1" , "2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate !== 2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate nene 2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate isnot 2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate ## 2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate !== :1" , "2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate nene :1" , "2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cdate isnot :1" , "2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type date
    testQuery_TypeDate_StrictlyNotEqualTo_AltKeyword3_Placeholder: function() {
		var message = "";
		var col= ds.MyClass_QueryTests.query("cdate ## :1" , "2005-05-05T00:00:00.000Z");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cdate == "2005-05-05T00:00:00.000Z")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a date attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong > 5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong <= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong gt 5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong <= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong > :1","5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong <= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong gt :1","5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong <= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong >= 5");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].clong < 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong gteq 5");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].clong < 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong gte 5");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].clong < 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong>= :1","5");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].clong < 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong gteq :1","5");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].clong < 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_GreatOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong gte :1","5");
		if(col.length == 6)
		{
			for(var i=0;i<6;i++)
			{
				if(col[i].clong < 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong < 5");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].clong >= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail "+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessThan_Altkeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong lt 5");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].clong >= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail "+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong < :1","5");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].clong >= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail "+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessThan_Altkeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong lt :1","5");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].clong >= 5)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail "+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong <= 5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong > 5)
				{
					message += " (incorrect entities) ";
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong lteq 5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong > 5)
				{
					message += " (incorrect entities) ";
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong lte 5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong > 5)
				{
					message += " (incorrect entities) ";
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong <= :1","5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong > 5)
				{
					message += " (incorrect entities) ";
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong lteq :1","5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong > 5)
				{
					message += " (incorrect entities) ";
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_LessOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong lte :1","5");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].clong > 5)
				{
					message += " (incorrect entities) ";
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_EqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong=2147483647");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != 2147483647)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_EqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong eq 2147483647");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != 2147483647)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_EqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong like 2147483647");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != 2147483647)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_EqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong = :1","2147483647");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != 2147483647)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_EqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong eq :1","2147483647");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != 2147483647)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_EqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong like :1","2147483647");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != 2147483647)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong == -5000");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != -5000)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong is -5000");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != -5000)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong eqeq -5000");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != -5000)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong== :1","-5000");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != -5000)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong is :1","-5000");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != -5000)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong eqeq :1","-5000");
		if(col.length == 1)
		{
			for(var i=0;i<1;i++)
			{
				if(col[i].clong != -5000)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong != 0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong # 0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong != :1" , "0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong # :1" , "0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong !== 0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong nene 0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong isnot 0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong ## 0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong !== :1" , "0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong nene :1" , "0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong isnot :1" , "0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type long
    testQuery_TypeLong_StrictlyNotEqualTo_AltKeyword3_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("clong ## :1" , "0");
		if(col.length == 9)
		{
			for(var i=0;i<9;i++)
			{
				if(col[i].clong == 0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a long attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum>100");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cnum <= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum gt 100");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cnum <= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum> :1","100");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cnum <= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum gt :1","100");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cnum <= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum>=100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum gteq 100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum gte 100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum>= :1","100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum gteq :1","100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_GreatOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum gte :1","100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessThan_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum < 100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum >= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessThan_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum lt 100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum >= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessThan_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum< :1","100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum >= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessThan_AltKeyword_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum lt :1","100");
		if(col.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum >= 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessOrEqual_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum<=100");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cnum > 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessOrEqual_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum lteq 100");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cnum > 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessOrEqual_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum lte 100");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cnum > 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessOrEqual_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum<= :1","100");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cnum > 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessOrEqual_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum lteq :1","100");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cnum > 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_LessOrEqual_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum lte :1","100");
		if(col.length == 7)
		{
			for(var i=0;i<7;i++)
			{
				if(col[i].cnum > 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_EqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = 100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_EqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum eq 100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_EqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum like 100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_EqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = :1","100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_EqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum eq :1","100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_EqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum like :1","100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum == 100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum is 100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum eqeq 100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum == :1","100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum is :1","100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum eqeq :1","100");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].cnum != 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum != 100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum # 100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_NotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum != :1","100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_NotEqualTo_AltKeyword: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum # :1","100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_Symbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum !== 100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_AltKeyword1: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum nene 100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_AltKeyword2: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum isnot 100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_AltKeyword3: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum ## 100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_Symbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum !== :1","100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_AltKeyword1_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum nene :1","100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_AltKeyword2_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum isnot :1","100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
	//testQuery: type number
    testQuery_TypeNumber_StrictlyNotEqualTo_AltKeyword3_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum ## :1","100");
		if(col.length == 8)
		{
			for(var i=0;i<8;i++)
			{
				if(col[i].cnum == 100)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a number attribute fail"+message);
    },
    //testQuery: type string
    testQuery_TypeString_BeginsWith_Symbol: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name begin t");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != "t")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_BeginsWith_AltSymbol: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name begin t");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != "t")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_BeginsWith_Symbol_Placeholder: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name begin :1","t");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != "t")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_BeginsWith_AltSymbol_Placeholder: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name begin :1","t");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != "t")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
	//Query: type string
    testQuery_TypeString_EndsWith: function() {
    	var message = "";
    	var col = ds.MyClass_QueryTests.query("name = *a");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].name.charAt(col[i].name.length - 1) != "a")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
	//Query: type string
    testQuery_TypeString_EndsWith_Placeholder: function() {
    	var message = "";
    	var col = ds.MyClass_QueryTests.query("name = :1","*a");
		if(col.length == 2)
		{
			for(var i=0;i<2;i++)
			{
				if(col[i].name.charAt(col[i].name.length - 1) != "a")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_Contain_Symbol: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name %% *a*");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].name.search("a")<0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_Contain_AltSymbol: function() {
    	var message = "";
    	var col = ds.MyClass_QueryTests.query("name = *a*");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].name.search("a")<0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_Contain_Symbol_Placeholder: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name %% :1","*a*");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].name.search("a")<0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
    //testQuery: type string
    testQuery_TypeString_Contain_AltSymbol_Placeholder: function() {
    	var message = "";
    	var col = ds.MyClass_QueryTests.query("name = :1","*a*");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].name.search("a")<0)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
	//testQuery: type string
    testQuery_TypeString_BeginWithAndEndWith: function() {
    	var message = "";
    	var col = ds.MyClass_QueryTests.query("name = t*o");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != 't' || col[i].name.charAt(col[i].name.length - 1) != 'o')
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
	//testQuery: type string
    testQuery_TypeString_BeginWithAndEndWith_Placeholder: function() {
    	var message = "";
		var col = ds.MyClass_QueryTests.query("name = :1","t*o");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != 't' || col[i].name.charAt(col[i].name.length - 1) != 'o')
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute fail"+message);
	},
	//test Query: conjunction AND by name
	testQuery_Conjunction_AND_ByName: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum <= 12 AND cbool = true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum > 12|| col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (AND) fail"+message);
	},
	//test Query: conjunction AND by name
	testQuery_Conjunction_AND_ByName_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum <= :1 AND cbool = :2","12","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum > 12 || col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (AND) fail"+message);
	},
	//test Query: conjunction AND by symbol
	testQuery_Conjunction_AND_BySymbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum <= 12 & cbool = true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum > 12 ||col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (&) fail"+message);
	},
	//test Query: conjunction AND by symbol
	testQuery_Conjunction_AND_BySymbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum <= :1 & cbool = :2","12","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum > 12 ||col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (&) fail"+message);
	},
	//test Query: conjunction AND by symbol
	testQuery_Conjunction_AND_BySymbolBis: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum <= 12 && cbool = true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum > 12 || col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (&&) fail"+message);
	},
	//test Query: conjunction AND by symbol
	testQuery_Conjunction_AND_BySymbolBis_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum <= :1 && cbool = :2","12","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum > 12 || col[i].cbool == false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (&&) fail"+message);
	},
	//test Query: conjunction OR by name
	testQuery_Conjunction_OR_ByName: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = 100 OR cbool = false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum != 100 & col[i].cbool != false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (OR) fail"+message);
	},
	//test Query: conjunction OR by name
	testQuery_Conjunction_OR_ByName_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = :1 OR cbool = :2","100","false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum != 100 & col[i].cbool != false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (OR) fail"+message);
	},
	//test Query: conjunction OR by symbol
	testQuery_Conjunction_OR_BySymbol: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = 100 | cbool = false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum != 100 & col[i].cbool != false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (|) fail"+message);
	},
	//test Query: conjunction OR by symbol
	testQuery_Conjunction_OR_BySymbol_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = :1 | cbool = :2","100","false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum != 100 & col[i].cbool != false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (|) fail"+message);
	},
	//test Query: conjunction OR by symbol
	testQuery_Conjunction_OR_BySymbolBis: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = 100 || cbool = false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum != 100 & col[i].cbool != false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (||) fail"+message);
	},
	//test Query: conjunction OR by symbol
	testQuery_Conjunction_OR_BySymbolBis_Placeholder: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum = :1 || cbool = :2","100","false");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cnum != 100 & col[i].cbool != false)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (||) fail"+message);
	},
	//test Query: conjunction not by symbol
	testQuery_Conjunction_NOT_BySymbol: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("! (cbool = true)");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (NOT) fail"+message);
	},
	//test Query: conjunction not by symbol
	testQuery_Conjunction_NOT_BySymbol_Placeholder: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("! cbool = :1","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (NOT) fail"+message);
	},
	//test Query: conjunction not by name
	testQuery_Conjunction_NOT_ByName: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("not (cbool = true)");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (NOT) fail"+message);
	},
	//test Query: conjunction not by name
	testQuery_Conjunction_NOT_ByName_Placeholder: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("not cbool = :1","true");
		if(col.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if(col[i].cbool == true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (NOT) fail"+message);
	},
	//test Query: conjunction AND NOT by name
	testQuery_Conjunction_ANDNOT_ByName: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("(cbool = true) and not (cnum < 10)");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cnum < 10 & col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (AND NOT) fail"+message);
	},
	//test Query: conjunction AND NOT by name
	testQuery_Conjunction_ANDNOT_ByName_Placeholder: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("cbool = :1 and not cnum < :2","true","10");
		if(col.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].cnum < 10 & col[i].cbool != true)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (AND NOT) fail"+message);
	},
	//test Query: conjunction AND NOT by symbol
	testQuery_Conjunction_ANDNOT_BySymbol: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("(cbool = true) & ! (cnum < 10)");
		var col2 = ds.MyClass_QueryTests.query("cbool = :1 & ! cnum < :2","true","10");
		if(col.length == 3 && col2.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if((col[i].cnum < 10 & col[i].cbool != true) || (col2[i].cnum < 10 & col2[i].cbool != true))
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (AND NOT) fail"+message);
	},
	//test query: conjunction except by name
	testQuery_Conjunction_EXCEPT_ByName: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("(cbool = true) except (cnum < 10)");
		var col2 = ds.MyClass_QueryTests.query("cbool = :1 except cnum < :2","true","10");
		if(col.length == 3 && col2.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if((col[i].cnum < 10 & col[i].cbool != true) || (col2[i].cnum < 10 & col2[i].cbool != true))
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (EXCEPT) fail"+message);
	},
	//test Query: conjunction except by symbol
	testQuery_Conjunction_EXCEPT_BySymbol: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("(cbool = true) ^ (cnum < 10)");
		var col2 = ds.MyClass_QueryTests.query("cbool = :1 ^ cnum < :2","true","10");
		if(col.length == 3 && col2.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if((col[i].cnum < 10 & col[i].cbool != true) || (col2[i].cnum < 10 & col2[i].cbool != true))
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (EXCEPT) fail"+message);
	},
	//test Query: conjunction with more values
	testQuery_Conjunction_WithMoreValues: function() {
		var message = "";
		var col2 = ds.MyClass_QueryTests.query("cnum = :1 | cbool = :2","100","false","true","70000");
		if(col2.length == 4)
		{
			for(var i=0;i<4;i++)
			{
				if((col2[i].cnum != 100 & col2[i].cbool != false))
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied with conjunction (OR) and more valures fail"+message);	
	},
	//test query: order by asc
	testQuery_OrderBy_Asc: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("cnum < 300 AND cnum >= 0 order by cnum asc");
		var col2 = ds.MyClass_QueryTests.query("cnum < :1 AND cnum >= :2 order by cnum asc","300","0");
		var IDs = [6,7,4,3,9,12,11];
		for(var i = 0 ; i<7 ; i++)
		{
			if(col[i].ID != IDs[i] || col2[i].ID != IDs[i])
			{
				message = " "+col[i].ID+" "+IDs[i];
				break;
			}
		}
		if(message!="")
			Y.Assert.fail("query method applied with 'order by' fail");
	},
	//test query: order by desc
	testQuery_OrderBy_Desc: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.query("cnum < 300 AND cnum >= 0 order by cnum desc");
		var col2 = ds.MyClass_QueryTests.query("cnum < :1 AND cnum >= :2 order by cnum desc","300","0");
		var IDs = [11,12,9,3,4,7,6];
		for(var i = 0 ; i<7 ; i++)
		{
			if(col[i].ID != IDs[i] || col2[i].ID != IDs[i])
			{
				message = " "+col[i].ID+" "+IDs[i];
				break;
			}
		}
		if(message!="")
			Y.Assert.fail("query method applied with 'order by' fail");
	},
	//test query: order by, default value
	testQuery_OrderBy_DefaultValue: function() {
		var message = "";
		var col = ds.MyClass_QueryTests.query("cnum < 300 AND cnum >= 0 order by cnum");
		var col2 = ds.MyClass_QueryTests.query("cnum < :1 AND cnum >= :2 order by cnum","300","0");
		var IDs = [6,7,4,3,9,12,11];
		for(var i = 0 ; i<7 ; i++)
		{
			if(col[i].ID != IDs[i] || col2[i].ID != IDs[i])
			{
				message = " "+col[i].ID+" "+IDs[i];
				break;
			}
		}
		if(message!="")
			Y.Assert.fail("query method applied with 'order by' fail");
	},
	//test query: filter alias
	testQuery_AliasFilter: function() {
		var message = ""; 
		var col = ds.MyClass_QueryTests.filter("cnum >= 50");
		var col2 = ds.MyClass_QueryTests.filter("cnum >= :1","50");
		if(col.length == 5 && col2.length == 5)
		{
			for(var i=0;i<5;i++)
			{
				if(col[i].cnum < 50 || col2[i].cnum < 50)
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("The Alias 'filter' of query method fail");
	},
	//test query: Without parameters
	testQuery_WithoutParam: function() {
		var col = ds.MyClass_QueryTests.query();
		if(col != null)
			Y.Assert.fail("query method applied without param should not return a collection");
	},
	//test query: empty string as param
	testQuery_EmptyStringAsParam: function() {
		var col = ds.MyClass_QueryTests.query("");
		if(col != null)
			Y.Assert.fail("query method applied with empty string as param fail");
	},
	//test query: with non existing attributes
	testQuery_WithNonExistionAttribute: function() {
		var message = "";
		var isGood1 = false;
		var isGood2 = false;
		try
		{
			var col = ds.MyClass_QueryTests.query("num > 10");
		}
		catch(e)
		{
			isGood1 = true;
		}
		try
		{
			var col = ds.MyClass_QueryTests.query("num > :1","10");
		}
		catch(ee)
		{
			isGood2 = true;
			message +="(with placeholders)";
		}
		if(!isGood1 || !isGood2)
			Y.Assert.fail("query method " + message + " applied with non existing attribut should generate exception");
	},
	//test query: more parameters
	testQuery_MoreParams: function() {
		var col = ds.MyClass_QueryTests.query("name = tot*"," blablaa");
	    var message = "";
    	var col = ds.MyClass_QueryTests.query("name = t*","blab","70000");
		var col2 = ds.MyClass_QueryTests.query("name = :1","t*","blab","70000");
		if(col.length == 3 && col2.length == 3)
		{
			for(var i=0;i<3;i++)
			{
				if(col[i].name.charAt(0) != "t" || col2[i].name.charAt(0) != "t")
				{
					message += " (incorrect entities) ";
					break;
				}
			}
		}
		else
		{
			message += " (problem in length of returned collection) " ;
		}
		if(message!="")
			Y.Assert.fail("query method applied to a string attribute with more parameters fail"+message);
	},
	//test Query: with placeholders but second param missing
	testQuery_PlaceholderValuesMissing: function() {
		var isGood = false;
		try
		{
			var col = ds.MyClass_QueryTests.query("name = :1");
		}
		catch(e)
		{
			isGood = true;
		}
		if(!isGood)
			Y.Assert.fail("query method applied without placeholders values should generate exception");
	},
	//test Query: Conjunction whithout second query
	testQuery_ConjunctionWithoutSecondQuery: function() {
		var isGood = false;
		try
		{
			var col = ds.MyClass_QueryTests.query("name = >50 and ");
		}
		catch(e)
		{
			isGood = true;
		}
		if(!isGood)
			Y.Assert.fail("query method applied with conjuction operator but the second query is missing, should generate exception exception");
	},
	//test Query: dataclass and attribute has the same name
	testQuery_DataclassAndAttributeHasSameName: function() {
		var isGood = true;
		try
		{
			var col = ds.Personn.query("personn = toto");
		}
		catch(e)
		{
			isGood = false;
		}
		if(!isGood)
			Y.Assert.fail("query applied to a dataclass which has the same name as the name of an attribute should not generate an exception");
		else
		{
			if(col.length != 1)
				Y.Assert.fail("query didn't return correct entities");
		}
	},
	//testQuery: query and values are permuted
    testQuery_Placholders_QueryAndValueArePermuted: function() {
		var isGood = true;
		try{
			var col2 = ds.MyClass_QueryTests.query("100","cnum<= :1");
			isGood = false;
		}
		catch(e)
		{}
		if(!isGood)
			Y.Assert.fail("query method applied with placeholders (but values and query are reversed) should generate exception");
    },
	//test query: N to N relation
	testQuery_NToNRelationAttributes: function() {
		var coll = ds.Engineer.query("allAttendees.conference.title = java*");
		if(coll.length != 2 || coll[0].ID!=1 || coll[1].ID != 2 )
			Y.Assert.fail("query method applied with N to N relation attributes fail");
		var coll2 = ds.Engineer.query("allAttendees.conference.title = :1","java*");
		if(coll2.length != 2 || coll2[0].ID!=1 || coll2[1].ID != 2 )
			Y.Assert.fail("query method applied with N to N relation attributes and placeholders fail");
	},
	//test query: N to N relation
	testQuery_NToNRelationAttributes_Placeholder: function() {
		var coll = ds.Engineer.query("allAttendees.conference.title = :1","java*");
		if(coll.length != 2 || coll[0].ID!=1 || coll[1].ID != 2 )
			Y.Assert.fail("query method applied with N to N relation attributes fail");
		var coll2 = ds.Engineer.query("allAttendees.conference.title = :1","java*");
		if(coll2.length != 2 || coll2[0].ID!=1 || coll2[1].ID != 2 )
			Y.Assert.fail("query method applied with N to N relation attributes and placeholders fail");
	},
	//test query: N to One relation
	testQuery_NToOneRelationAttributes: function() {
		var message = "";
		var coll = ds.OneToN.query("oneToN.name = 'oneToN2 1*'");
		if(coll.length == 2)
		{
			if(coll[0].name!="oneToN 11" || coll[1].name != "oneToN 12")
				message += " (probleme in the entities of retured collection) ";
		}
		else
		{
			message += " (probleme in the length of returned collection [ "+ coll.length +"] )";
		}
		if(message != "" )
			Y.Assert.fail("query method with N to One relation attributes fail "+message);
	},
	//test query: N to One relation
	testQuery_NToOneRelationAttributes_Placeholder: function() {
		var message = "";
		var coll = ds.OneToN.query("oneToN.name = :1","oneToN2 1*");
		if(coll.length == 2)
		{
			if(coll[0].name!="oneToN 11" || coll[1].name != "oneToN 12")
				message += " (probleme in the entities of retured collection) ";
		}
		else
		{
			message += " (probleme in the length of returned collection [ "+ coll.length +"] )" ;
		}
		if(message != "" )
			Y.Assert.fail("query method with N to One relation attributes fail "+message);
	},
	//test Query: N to One relation attribut (same dataclass )
	testQuery_NToOneRelationAttributes_SameDataclass_LevelOne: function() {
		var message = "";
		var coll = ds.People.query("father.name = A");
		if(coll.length == 4)
		{
			for(var i = 0 ; i < 4 ; i++ )
			{
				if(coll[i].father.ID != 0)
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
			Y.Assert.fail("query method with N to One relation attributes fail "+message);
	},
	//test Query: N to One relation attribut (same dataclass )
	testQuery_NToOneRelationAttributes_SameDataclass_LevelOne_Placeholder: function() {
		var message = "";
		var coll = ds.People.query("father.name = :1","A");
		if(coll.length == 4)
		{
			for(var i = 0 ; i < 4 ; i++ )
			{
				if(coll[i].father.ID != 0)
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
			Y.Assert.fail("query method with N to One relation attributes fail "+message);
	},
	//test Query: N to One relation attribut (same dataclass )
	testQuery_NToOneRelationAttributes_SameDataclass_LevelTow: function() {
		var message = "";
		var coll = ds.People.query("father.mother.name = Z");
		if(coll.length == 2)
		{
			for(var i = 0 ; i < 2 ; i++ )
			{
				if(coll[i].father.mother.ID != 1)
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection ["+coll.length+"] )";
		}
		if(message != "" )
			Y.Assert.fail("query method with N to One relation attributes fail "+message);
	},
	//test Query: N to One relation attribut (same dataclass )
	testQuery_NToOneRelationAttributes_SameDataclass_LevelTow_Placeholder: function() {
		var message = "";
		var coll = ds.People.query("father.mother.name = :1","Z");
		if(coll.length == 2)
		{
			for(var i = 0 ; i < 2 ; i++ )
			{
				if(coll[i].father.mother.ID != 1)
				{
					message += " (probleme in the entities of retured collection) ";
					break;
				}
			}
		}
		else
		{
			message += " (probleme in the length of returned collection ["+coll.length+"] )";
		}
		if(message != "" )
			Y.Assert.fail("query method with N to One relation attributes fail "+message);
	},
	//test Query: Javascript functions
	testQuery_JavascriptFunctions: function() {
		var message = "";
		isGood = true;
		try
		{
			var coll = ds.JavascriptFunctions.query("$(this.name.length == this.firstname.length)", { allowJavascript: true });
		}
		catch(e)
		{
			isGood = false;
		}
		if(isGood){
			if(coll.length == 3)
			{
				for(var i = 0 ; i < 3 ; i++ )
				{
					if(coll[i].name.length != coll[i].firstname.length)
					{
						message += " (probleme in the entities of retured collection) ";
						break;
					}
				}
			}
			else
			{
				message += " (probleme in the length of returned collection"+"["+coll.length+"]instead of 3) ";
			}
			if(message != "" )
				Y.Assert.fail("query method associated with Javascript functions fail "+message);
		}
		else
			Y.Assert.fail("query method associated with Javascript functions generated unexpected exception");
	},	
};