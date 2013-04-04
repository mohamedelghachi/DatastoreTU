//AddCollection1
for (var i = 1; i <= 2; i++) {
    var addCollection1_entity1 = new ds.AddCollection1();
    addCollection1_entity1.name = "entity " + i;
    addCollection1_entity1.cnum = 10 * i;
    addCollection1_entity1.save();
};

//AddCollection2
for (var i = 1; i <= 2; i++) {
    var addCollection1_entity1 = new ds.AddCollection2();
    addCollection1_entity1.name = "entity " + i;
    addCollection1_entity1.cnum = 10 * i;
    addCollection1_entity1.save();
};

//Attendee , Engineer and Conference
var engineer_arr1 = ["Ali", "Flan", "Jean"];
var conference_arr1 = ["Java 7", "wakanda v2"];
for (var i = 0; i < 3; i++) {
    var engineer_entity = new ds.Engineer();
    engineer_entity.name = engineer_arr1[i];
    engineer_entity.save();
};
for (var i = 0; i < 2; i++) {
    var conference_entity = new ds.Conference();
    conference_entity.title = conference_arr1[i];
    conference_entity.save();
};
var attendee_entity1 = new ds.Attendee();
attendee_entity1.engineer = ds.Engineer.find("ID = 1");
attendee_entity1.conference = ds.Conference.find("ID = 1");
attendee_entity1.save();
var attendee_entity2 = new ds.Attendee();
attendee_entity2.engineer = ds.Engineer.find("ID = 2");
attendee_entity2.conference = ds.Conference.find("ID = 1");
attendee_entity2.save();
var attendee_entity3 = new ds.Attendee();
attendee_entity3.engineer = ds.Engineer.find("ID = 1");
attendee_entity3.conference = ds.Conference.find("ID = 2");
attendee_entity3.save();
var attendee_entity4 = new ds.Attendee();
attendee_entity4.engineer = ds.Engineer.find("ID = 2");
attendee_entity4.conference = ds.Conference.find("ID = 2");
attendee_entity4.save();
var attendee_entity5 = new ds.Attendee();
attendee_entity5.engineer = ds.Engineer.find("ID = 3");
attendee_entity5.conference = ds.Conference.find("ID = 2");
attendee_entity5.save();

//TheComposite
for (var i=0; i<10; i++) {
	var theComposite_entity = new ds.TheComposite();
	theComposite_entity.name = "the composte"+i;
	theComposite_entity.save();
};
//Component
for (var i=0; i<50; i++) {
	var component_entity = new ds.Component();
	component_entity.name = "component_"+i;
	if(Math.floor(Math.random()*10)%2)
		component_entity.theComposite = ds.TheComposite.find("ID = :1",Math.floor(Math.random()*10));
	component_entity.save();
};
var component_entity = new ds.Component();
component_entity.name = "component_50";
component_entity.theComposite = ds.TheComposite.find("ID = :1",Math.floor(Math.random()*10));
component_entity.save();


//Employee
var employee_arr1 = ["simo", "Jean", "Karim", "Lu", "Lee"];
var employee_arr2 = ["simoo", "jean", "Farid", "Lo", "Japan"];
for (var i = 0; i < 5; i++) {
    var employee_entity1 = new ds.Employee();
    employee_entity1.name = employee_arr1[i];
    employee_entity1.firstname = employee_arr2[i];
    employee_entity1.save();
};
for (var i = 0; i < 3; i++) {
    var employee_entity1 = new ds.Employee();
    employee_entity1.save();
};

//Employee1
var employee1_arr1 = ["entity #5", "entity #8", "entity #18", "entity #21", "entity #24"];
for (var i = 0; i < 5; i++) {
    var employee1_entity1 = new ds.Employee1();
    employee1_entity1.nom = employee1_arr1[i];
    employee1_entity1.save();
};

//Employee2
var employee2_arr1 = ["entity #1", "entity #2 bis", "entity #3", "entity #4", "entity #5", "entity #6"];
for (var i = 0; i < 6; i++) {
    var employee2_entity0 = new ds.Employee2();
    employee2_entity0.nom = employee2_arr1[i];
    employee2_entity0.save();
};


//Employee3
var employee3_arr1 = ["entity #2", "entity #3", "entity #4", "entity #5", "entity #6", "entity #7"];
for (var i = 0; i < 7; i++) {
    var employee3_entity0 = new ds.Employee3();
    employee3_entity0.nom = employee3_arr1[i];
    employee3_entity0.save();
};

//Flags is empty
//IndexedDate is empty
//JavascriptFunctions
var javascriptFunctions_arr1 = ["abc", "abcd", "abcd", "abcd", "abcdef", "abcdefgh", "abcdefgh"];
var javascriptFunctions_arr2 = ["abc", "ab", "abcd", "abcdef", "abcdef", "abcdef", "abcdefghi"];
for (var i = 0; i < 7; i++) {
    var javascriptFunctions_entity = new ds.JavascriptFunctions();
    javascriptFunctions_entity.name = javascriptFunctions_arr1[i];
    javascriptFunctions_entity.firstname = javascriptFunctions_arr2[i];
    javascriptFunctions_entity.save();
}

//MyAutoSequenceNumberClass is empty
//MyAutoSequenceNumberClassAt1
for (var i = 0; i < 2; i++) {
    var e = new ds.MyAutoSequenceNumberClassAt1();
    e.save();
}

//MyClass_IndexedAttributes
var cnum_Btree_arr = [3, 0, 4, 5, 9, 8, 7, 1, 6, 2];
var cnum_Cluster_arr = [9, 3, 2, 0, 1, 7, 6, 4, 5, 8];
var cnum_Keywords_arr = [5, 4, 7, 0, 8, 1, 3, 9, 2, 6];
var cnum_Automatic_arr = [9, 6, 1, 8, 2, 7, 3, 0, 4, 5];
var cstring_Btree_arr = ["a", "t", "gh", "é", "mb", "Trs", "zk", "haha", "yes", "tir"];
var cstring_Cluster_arr = ["zbk", "b", "zk", "O", "de", "Jamal", "jamal", "fb", "kl", "aaa"];
var cstring_Keywords_arr = ["fr", "fm", "c", "s", "ck", "Ali", "b", "gmail", "kr", "meme"];
var cstring_Automatic_arr = ["en", "S", "d", "Jean", "fbi", "e", "oups", "no", "tb", "heho"];
var clong_Btree_arr = [0, -100, 36, 13, 444, 55000, 6, 7, 45, 212];
var clong_Cluster_arr = [300, 1, 37, -3, 13, 5, 31, 26, 8, 21];
var clong_Keywords_arr = [4, -11, 2, 0, 4, 1374, 7, 4, 90, 9];
var clong_Automatic_arr = [97, 33, 99999, 3, 12005, 1986, 16, 36, 3041, 10];
var cduration_Btree_arr = [3, 0, 4, 5, 9, 8, 7, 1, 6, 2];
var cduration_Cluster_arr = [5, 4, 7, 0, 8, 1, 3, 9, 2, 6];
var cduration_Keywords_arr = [9, 3, 2, 0, 1, 7, 6, 4, 5, 8];
var cduration_Automatic_arr = [9, 6, 1, 8, 2, 7, 3, 0, 4, 5];
var cword_Btree_arr = [3, 0, 4, 5, 9, 8, 7, 1, 6, 2];
var cword_Cluster_arr = [9, 3, 2, 0, 1, 7, 6, 4, 5, 8];
var cword_Keywords_arr = [5, 4, 7, 0, 8, 1, 3, 9, 2, 6];
var cword_Automatic_arr = [9, 6, 1, 8, 2, 7, 3, 0, 4, 5];
var cdate_Btree_arr = ["2011-06-11T15:58:09.000Z", "2011-05-11T15:58:25.000Z", "2011-09-11T14:58:37.000Z", "2011-01-11T14:58:57.000Z", "2011-07-11T15:59:13.000Z", "2011-06-11T15:59:31.000Z", "2011-12-11T15:00:34.000Z", "2011-11-11T15:00:43.000Z", "2012-12-07T23:00:00.000Z", "2012-04-06T23:00:00.000Z"];
var cdate_Cluster_arr = ["2011-06-11T15:58:09.000Z", "2011-05-11T15:58:25.000Z", "2011-09-11T14:58:37.000Z", "2011-01-11T14:58:57.000Z", "2011-07-11T15:59:13.000Z", "2011-06-11T15:59:31.000Z", "2011-12-11T15:00:34.000Z", "2011-11-11T15:00:43.000Z", "2012-12-07T23:00:00.000Z", "2012-04-06T23:00:00.000Z"];
var cdate_Keywords_arr = ["2011-06-11T15:58:09.000Z", "2011-05-11T15:58:25.000Z", "2011-09-11T14:58:37.000Z", "2011-01-11T14:58:57.000Z", "2011-07-11T15:59:13.000Z", "2011-06-11T15:59:31.000Z", "2011-12-11T15:00:34.000Z", "2011-11-11T15:00:43.000Z", "2012-12-07T23:00:00.000Z", "2012-04-06T23:00:00.000Z"];
var cdate_Automatic_arr = ["2011-06-11T15:58:09.000Z", "2011-05-11T15:58:25.000Z", "2011-09-11T14:58:37.000Z", "2011-01-11T14:58:57.000Z", "2011-07-11T15:59:13.000Z", "2011-06-11T15:59:31.000Z", "2011-12-11T15:00:34.000Z", "2011-11-11T15:00:43.000Z", "2012-12-07T23:00:00.000Z", "2012-04-06T23:00:00.000Z"];
var cbyte_Btree_arr = [3, 0, 4, 5, 9, 8, 7, 1, 6, 2];
var cbyte_Automatic_arr = [3, 0, 4, 5, 9, 8, 7, 1, 6, 2];
for (var i = 0; i < 10; i++) {
    var myClass_IndexedAttributes_entity = new ds.MyClass_IndexedAttributes();
    myClass_IndexedAttributes_entity.cnum_Btree = cnum_Btree_arr[i];
    myClass_IndexedAttributes_entity.cnum_Cluster = cnum_Cluster_arr[i];
    myClass_IndexedAttributes_entity.cnum_Keywords = cnum_Keywords_arr[i];
    myClass_IndexedAttributes_entity.cnum_Automatic = cnum_Automatic_arr[i];
    myClass_IndexedAttributes_entity.cstring_Btree = cstring_Btree_arr[i];
    myClass_IndexedAttributes_entity.cstring_Cluster = cstring_Cluster_arr[i];
    myClass_IndexedAttributes_entity.cstring_Keywords = cstring_Keywords_arr[i];
    myClass_IndexedAttributes_entity.cstring_Automatic = cstring_Automatic_arr[i];
    myClass_IndexedAttributes_entity.cduration_Btree = cduration_Btree_arr[i];
    myClass_IndexedAttributes_entity.clong_Btree = clong_Btree_arr[i];
    myClass_IndexedAttributes_entity.clong_Cluster = clong_Cluster_arr[i];
    myClass_IndexedAttributes_entity.clong_Keywords = clong_Keywords_arr[i];
    myClass_IndexedAttributes_entity.clong_Automatic = clong_Automatic_arr[i];
    myClass_IndexedAttributes_entity.cduration_Btree = cduration_Btree_arr[i];
    myClass_IndexedAttributes_entity.cduration_Cluster = cduration_Cluster_arr[i];
    myClass_IndexedAttributes_entity.cduration_Keywords = cduration_Keywords_arr[i];
    myClass_IndexedAttributes_entity.cduration_Automatic = cduration_Automatic_arr[i];
    myClass_IndexedAttributes_entity.cword_Btree = cword_Btree_arr[i];
    myClass_IndexedAttributes_entity.cword_Cluster = cword_Cluster_arr[i];
    myClass_IndexedAttributes_entity.cword_Keywords = cword_Keywords_arr[i];
    myClass_IndexedAttributes_entity.cword_Automatic = cword_Automatic_arr[i];
    myClass_IndexedAttributes_entity.cdate_Btree= new Date(cdate_Btree_arr[i]);
    myClass_IndexedAttributes_entity.cdate_Cluster = new Date(cdate_Cluster_arr[i]);
    myClass_IndexedAttributes_entity.cdate_Keywords = new Date(cdate_Keywords_arr[i]);
    myClass_IndexedAttributes_entity.cdate_Automatic = new Date(cdate_Automatic_arr[i]);
    myClass_IndexedAttributes_entity.cbyte_Btree = cbyte_Btree_arr[i];
    myClass_IndexedAttributes_entity.cbyte_Automatic = cbyte_Automatic_arr[i];
    myClass_IndexedAttributes_entity.save();
};

//MyClass_QueryTests
var name_arr = [null, "Zza", "toto", "ab bc", "ba", "k", null, "s'a'm", "k", "toto", "toto", "k"];
var cnum_arr = [-32768, null, 12, 11, 32768, 0, 7, null, 100, 314, 123, 100];
var cbyte_arr = [0, -1, null, 7, 1, 2, 3, 33, 2, 0, 0, 11];
var clong_arr = [17, -300045782, 0, null, 5, 2147483647, 200, 2, -5000, null, 524, 20];
var cduration_arr = [null, 20, 7, 19, 0, 2, 20, 10, null, null, 2, null];
var cbool_arr = [true, null, false, true, null, true, true, false, false, true, true, false];
var cdate_arr = ["1986-07-31T00:00:00.000Z", "2012-04-26T00:00:00.000Z", "2010-01-01T00:00:00.000Z", "2012-02-29T00:00:00.000Z", null, "1732-02-27T00:00:00.000Z", "2011-11-07T00:00:00.000Z", null, "2005-05-05T00:00:00.000Z", null, "2005-06-12T00:00:00.000Z", "2005-05-05T00:00:00.000Z"];
for (var i = 0; i < 12; i++) {
    var myClass_QueryTests_entity = new ds.MyClass_QueryTests();
    if (name_arr[i] != null) myClass_QueryTests_entity.name = name_arr[i];
    if (cnum_arr[i] != null) myClass_QueryTests_entity.cnum = cnum_arr[i];
    if (cbyte_arr[i] != null) myClass_QueryTests_entity.cbyte = cbyte_arr[i];
    if (clong_arr[i] != null) myClass_QueryTests_entity.clong = clong_arr[i];
    if (cduration_arr[i] != null) myClass_QueryTests_entity.cduration = cduration_arr[i];
    if (cbool_arr[i] != null) myClass_QueryTests_entity.cbool = cbool_arr[i];
    if (cdate_arr[i] != null) myClass_QueryTests_entity.cdate = new Date(cdate_arr[i]);
    myClass_QueryTests_entity.save();
};

//MyClass1
var name1_arr = ["a","b","C","D","e","F","g","h","nine","g","hg"];
var cnum1_arr = [1, 2, 3, 4, 5, 8, 3, -2, 97, 3, 8];
var cdate1_arr = ["2011-05-03T23:00:00.000Z", "2011-05-01T23:00:00.000Z", "2012-03-06T00:00:00.000Z", "2011-05-09T23:00:00.000Z", "1899-11-30T00:00:00.000Z", "2011-05-22T23:00:00.000Z", "2011-05-23T23:00:00.000Z", "2011-05-27T23:00:00.000Z", "2012-06-06T00:00:00.000Z", "2011-05-08T23:00:00.000Z", "2011-05-22T23:00:00.000Z"];
var cblob1_arr = [null, null, 15, 20, null, null, null, null, null, 17, null];
var cbyte1_arr = [1, 2, 3, 4, 5, null, null, null, 98, null, null];
var clong1_arr = [1, 2, 3, 4, 5, 6, 7, 8, 999999, 9, 10];
var cword1_arr = [1, 2, 3, 4, 5, null, null, null, 998, null, null];
var cduration1_arr = [4, 4, 6, 0, 0, 0, 0, null, 9, null, null];
var cbool1_arr = [true, true, false, true, false, true, true, true, false, true, true];
for (var i = 0; i < 11; i++) {
    var myClass1_entity = new ds.MyClass1();
    myClass1_entity.name = name1_arr[i];
    myClass1_entity.cnum = cnum1_arr[i];
    myClass1_entity.cdate = new Date(cdate1_arr[i]);
    if (cblob1_arr[i] != null) myClass1_entity.cblob = new Blob(cblob1_arr[i], 88, "application/octet-stream");;
    if (cbyte1_arr[i] != null) myClass1_entity.cbyte = cbyte1_arr[i];
    myClass1_entity.clong = clong1_arr[i];
    if (cword1_arr[i] != null) myClass1_entity.cword = cword1_arr[i];
    if (cduration1_arr[i] != null) myClass1_entity.cduration = cduration1_arr[i];
    myClass1_entity.cbool = cbool1_arr[i];
    myClass1_entity.save();
};


//MyClass10
for (var i=0; i<10; i++) {
	var myClass10_entity = new ds.MyClass10();
	myClass10_entity.cname = "myClass10_"+(i+1);
};
//MyClass9
ds.MyClass9.setAutoSequenceNumber(0);
var name2_arr = ["Z","K","F","S","D","A","","1","Z","&"];
var cnum2_arr = [1000,9,8,7,6,5,4,3,2,-36];
var cdate2_arr = ["2012-01-25T00:00:00.000Z","2012-02-25T00:00:00.000Z","2012-02-10T00:00:00.000Z","2012-04-25T00:00:00.000Z","2012-05-25T00:00:00.000Z","2012-06-25T00:00:00.000Z","2012-12-31T00:00:00.000Z","2012-08-25T00:00:00.000Z","2012-09-25T00:00:00.000Z","2012-10-25T00:00:00.000Z"];
var cbyte2_arr = [30,1,2,3,4,5,6,7,8,-2];
var clong2_arr = [0,1,13,3,5,4,7,6,9,8];
var cword2_arr = [9,8,7,6,5,4,3,2,1,0];
var cduration2_arr = [9,8,7,6,5,4,3,2,1,0];
for (var i=0; i<10; i++) {
	var myClass9_entity = new ds.MyClass9();
	myClass9_entity.name = name2_arr[i];
	myClass9_entity.cnum = cnum2_arr[i];
	myClass9_entity.cdate = new Date(cdate2_arr[i]);
	myClass9_entity.cbyte = cbyte2_arr[i];
	myClass9_entity.clong = clong2_arr[i];
	myClass9_entity.cword = cword2_arr[i];
	myClass9_entity.cduration = cduration2_arr[i];
	myClass9_entity.save();
};


//MyClass2
var myClass2_entity1 = new ds.MyClass2();
myClass2_entity1.distinct = 1;
myClass2_entity1.cnum = 2147483647;
myClass2_entity1.asc = 1;
myClass2_entity1.desc = 2;
myClass2_entity1.save();
var myClass2_entity2 = new ds.MyClass2();
myClass2_entity2.distinct = 2;
myClass2_entity2.cnum = 2147483645;
myClass2_entity2.asc = 1;
myClass2_entity2.desc = 2;
myClass2_entity2.save();

//MyClass3 is empty

//ToBeRemoved and MyClass4 which are related
for (var i = 0; i < 10; i++) {
    var toBeRemoved = new ds.ToBeRemoved();
    toBeRemoved.name = "toBeRemoved_" + i;
    toBeRemoved.age = Math.floor(Math.random() * 100);
    toBeRemoved.save();
    for (var j = 0; j < 10; j++) {
        var myClass = new ds.MyClass4();
        myClass.name = "myClass_" + (i + j);
        myClass.cbool = Math.floor(Math.random() * 10) % 2 ? true : false;
        myClass.toBeRemoved = toBeRemoved;
        myClass.save();
    };
};


//MyClass7
for (var i = 0; i < 50; i++) {
    var e = new ds.MyClass7();
    e.name = "myClass7_" + (i + 1);
    e.cnum = i;
    e.save();
};

//MyClass8 is empty
//MyClassForImageTest is empty
//MyClassForImageTest2 is empty
//MyClassSave is empty
//MyClassWithoutAttributs is empty
//MyEmptyClass is empty
//MyForEachClass
var myForEachClass_arr1 = ["second value", "2", "3"];
for (var i = 0; i < 3; i++) {
    var myForEachClass = new ds.MyForEachClass();
    myForEachClass.cname = myForEachClass_arr1[i];
    myForEachClass.save();
};

//MyFromArrayClass is empty
//MyNewAutoSequenceNumberClass is empty

//MyNullClass
	ds.MyNullClass.setAutoSequenceNumber(3);
    var myNullClass1 = new ds.MyNullClass();
    myNullClass1.save();
    ds.MyNullClass.setAutoSequenceNumber(2);
    var myNullClass2 = new ds.MyNullClass();
    myNullClass2.save();

//MyOrderbyClass
var cnum3_arr = [7,-2,5,5,7,1,null,11];
var cstring3_arr = ["f","z","e","b","E","é","e","e"];
var cdate3_arr = ["2011-06-11T15:58:09.000Z","2011-05-11T15:58:25.000Z","2011-09-11T14:58:37.000Z","2011-01-11T14:58:57.000Z","2011-07-11T15:59:13.000Z","2011-06-11T15:59:31.000Z","2011-12-11T15:00:34.000Z","2011-11-11T15:00:43.000Z"];
var cduration3_arr = [10627200000,7948800000,13219200000,15897600000,2678400000,-2592000000,0,7948800000];
var cuuid3_arr = ["F1FAAF46FFC2A241A47D104E2A5F998C","DECE9FF68C9F4343915B571E89FBA6D7","B3C05443FA757B468D52423DC402E91A","3BD10D47A2ADC545A5ABB04A8777FF51","87297FC2EC8C004C96177F89140AD4AE","3EA4EA90D62B0948B4B36DD4A0AE3380","EBB08F48BE9B9B498D8E529D584EA43C","4B319EF8E7087D4A8E5700C745A827F7"];
var cstringAsBlob3_arr = ["f","z","e","b","E","é","e","e"];
for (var i=0; i<8; i++) {
	var myOrderbyClass_entity = new ds.MyOrderbyClass();
	myOrderbyClass_entity.cnum = cnum3_arr[i];
	myOrderbyClass_entity.cstring = cstring3_arr[i];
	myOrderbyClass_entity.cdate = new Date(cdate3_arr[i]);
	myOrderbyClass_entity.cduration = cduration3_arr[i];
	myOrderbyClass_entity.cuuid = cuuid3_arr[i];
	myOrderbyClass_entity.cstringAsBlob = cstringAsBlob3_arr[i];
	myOrderbyClass_entity.save();
};

//myRemoveForEachClass
var myRemoveForEachClass_arr1 = ["1", "2", "3"];
for (var i = 0; i < 3; i++) {
    var myRemoveForEachClass = new ds.MyRemoveForEachClass();
    myRemoveForEachClass.cname = myRemoveForEachClass_arr1[i];
    myRemoveForEachClass.save();
};

//OneToN & OneToN2
for (var i=1; i<=2; i++) {
	var oneToN2_entity = new ds.OneToN2();
	oneToN2_entity.name = "oneToN2 "+i+"1";
	oneToN2_entity.save();
};
for (var i=1; i<=2; i++) {
	var oneToN_entity1 = new ds.OneToN();
	oneToN_entity1.name = "oneToN "+i+"1";
	oneToN_entity1.oneToN = ds.OneToN2.find("ID = :1",i);
	oneToN_entity1.save();
	var oneToN_entity2 = new ds.OneToN();
	oneToN_entity2.name = "oneToN "+i+"2";
	oneToN_entity2.oneToN = ds.OneToN2.find("ID = :1",i)
	oneToN_entity2.save();
};


//OnSaveNoValidation
var onSaveNoValidation = new ds.OnSaveNoValidation();
onSaveNoValidation.nom = "entity #1";
onSaveNoValidation.save();

//Parent is empty
//Child is empty
//Related is empty

//People
ds.People.setAutoSequenceNumber(0);
var a = new ds.People();
a.name = "A";
a.sexe = "M";
a.save();
var z = new ds.People();
z.name = "Z";
z.sexe = "F";
z.save();
var c = new ds.People();
c.name = "C";
c.sexe = "M";
c.father = a;
c.mother = z;
c.save();
var d = new ds.People();
d.name = "D";
d.sexe = "F";
d.father = a;
d.mother = z;
d.save();
var s = new ds.People();
s.name = "S";
s.sexe = "M";
s.father = a;
s.mother = z;
s.save();
var f = new ds.People();
f.name = "F";
f.sexe = "F";
f.father = a;
f.mother = z;
f.save();
var g = new ds.People();
g.name = "G";
g.sexe = "M";
g.father = c;
g.mother = d;
g.save();
var h = new ds.People();
h.name = "H";
h.sexe = "F";
h.father = s;
h.mother = f;
h.save();
var j = new ds.People();
j.name = "J";
j.sexe = "M";
j.father = g;
j.mother = h;
j.save();

//Personn
var personn_arr1 = ["blabla", "toto", "miaou"];
for (var i = 0; i < 3; i++) {
    var personn_entity = new ds.Personn();
    personn_entity.personn = personn_arr1[i];
    personn_entity.save();
};

//RefuseEvent is empty
//TheComposite
//ToBeDroped
for (var i = 0; i < 6; i++) {
    var toBeDroped_entity = new ds.ToBeDroped();
    toBeDroped_entity.name = "To be droped " + i;
    toBeDroped_entity.save();
};

//Users is empty