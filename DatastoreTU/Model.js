
guidedModel =// @startlock
{
	OnSaveNoValidation :
	{
		events :
		{
			onRemove:function()
			{// @endlock
				if(ds.OnSaveNoValidation.length == 1)
					return { error: 100, errorMessage:"no message" };
				new ds.Flags({event:"onRemove_Refuse"}).save();
			},// @startlock
			onSave:function()
			{// @endlock
				if(ds.OnSaveNoValidation.length >= 1)
					return { error: 100, errorMessage:"no message" };
				new ds.Flags({event:"onSave_withoutOnValidation"}).save();
			}// @startlock
		}
	},
	RefuseEvent :
	{
		events :
		{
			onSave:function()
			{// @endlock
				if(ds.RefuseEvent.length == 0)
					return { error: 100, errorMessage:"no message" };
				new ds.Flags({event:"onSave_RefuseOnSave"}).save();
			},// @startlock
			onValidate:function()
			{// @endlock
				if(ds.RefuseEvent.length >= 1)
					return { error: 100, errorMessage:"no message" };
				new ds.Flags({event:"onValidate_RefuseOnValidate"}).save();
			}// @startlock
		}
	},
	Employee3 :
	{
		nom :
		{
			events :
			{
				onInit:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onInit_Attribute_DataClass"}).save();
				},// @startlock
				onLoad:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onLoad_Attribute_DataClass"}).save();
				},// @startlock
				onSet:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onSet_Attribute_DataClass"}).save();
				},// @startlock
				onValidate:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onValidate_Attribute_DataClass"}).save();
				},// @startlock
				onSave:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onSave_Attribute_DataClass"}).save();
				},// @startlock
				onRemove:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onRemove_Attribute_DataClass"}).save();
				}// @startlock
			}
		},
		events :
		{
			onInit:function()
			{// @endlock
				new ds.Flags({event:"onInit_DataClass_Attribute"}).save();
			},// @startlock
			onLoad:function()
			{// @endlock
				new ds.Flags({event:"onLoad_DataClass_Attribute"}).save();
			},// @startlock
			onValidate:function()
			{// @endlock
				new ds.Flags({event:"onValidate_DataClass_Attribute"}).save();
			},// @startlock
			onSave:function()
			{// @endlock
				new ds.Flags({event:"onSave_DataClass_Attribute"}).save();
			},// @startlock
			onRemove:function()
			{// @endlock
				new ds.Flags({event:"onRemove_DataClass_Attribute"}).save();
			},// @startlock
			onRestrictingQuery:function()
			{// @endlock
				return ds.Employee3.query("ID > 1");
			}// @startlock
		}
	},
	Employee2 :
	{
		nom :
		{
			events :
			{
				onInit:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onInit_Attribute_Only"}).save();
				},// @startlock
				onLoad:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onLoad_Attribute_Only"}).save();
				},// @startlock
				onSet:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onSet_Attribute_Only"}).save();
				},// @startlock
				onValidate:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onValidate_Attribute_Only"}).save();
				},// @startlock
				onSave:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onSave_Attribute_Only"}).save();
				},// @startlock
				onRemove:function(attributeName)
				{// @endlock
					new ds.Flags({event:"onRemove_Attribute_Only"}).save();
				}// @startlock
			}
		}
	},
	Employee1 :
	{
		events :
		{
			onInit:function()
			{// @endlock
				new ds.Flags({event:"onInit_DataClass_Only"}).save();
			},// @startlock
			onLoad:function()
			{// @endlock
				var entityEmployee2 = ds.Employee2.find("ID = 3");
				entityEmployee2.nom = "onLoadOfEmployee1";
				new ds.Flags({event:"onLoad_DataClass_Only"}).save();
			},// @startlock
			onValidate:function()
			{// @endlock
				new ds.Flags({event:"onValidate_DataClass_Only"}).save();
			},// @startlock
			onSave:function()
			{// @endlock
				new ds.Flags({event:"onSave_DataClass_Only"}).save();
			},// @startlock
			onRemove:function()
			{// @endlock
				new ds.Flags({event:"onRemove_DataClass_Only"}).save();
			},// @startlock
			onRestrictingQuery:function()
			{// @endlock
				return ds.Employee1.query("ID > 1");
			}// @startlock
		}
	}
};// @endlock
