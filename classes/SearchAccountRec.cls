public class SearchAccountRec {
	
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchString,integer inputNum)
   {
       searchString = '%' + searchString + '%';    
       
       return[Select Id,Name,AccountNumber,Website from Account where Name like :searchString limit :inputNum];
   }
}