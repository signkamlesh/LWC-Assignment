import { LightningElement, track, api } from 'lwc';

import getAccounts from '@salesforce/apex/SearchAccountRec.getAccounts';

export default class Assignment1 extends LightningElement 
{

    @track name;
    @track inputNumber;
    @track searchString;
    @track myAccounts;
    @track error;
    @track filterRecord;
    @track copyAccount;
    @track filterText;

    handleInputSearch(event) // all the input enter by user get handled by this
    {
        if(event.target.name == 'Name')
         {  
             this.searchString = event.target.value;
         }
        else if(event.target.name == 'RecordNumber')
        {
            this.inputNumber = event.target.value;
        } 
        else if(event.target.name == 'SearchFilerRecord')   
        {
            
         //   this.filterText = event.target.value;
           this.handleFilterData(event.target.value);
        }
        
    } 
    async handleClick()// Once user click on search it will show the serached records
    {
            let result = await getAccounts({
            searchString : this.searchString,
            inputNum : this.inputNumber});

        console.log(result);
        this.myAccounts = result;
        this.copyAccount = result;
    }
    handleFilterData(filterTextTemp)// It will filter the data based on local copy of myAccounts and display
    {
      //  filterTextTemp = this.filterText;
      
        this.copyAccount = this.myAccounts.filter(temp => temp.Name.includes(filterTextTemp));                
    }
}