import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {TextField} from "ui/text-field";
var socialShare = require("nativescript-social-share");

@Component({
    selector: "list",
    templateUrl: "./pages/list/list.html",
    styleUrls: ["./pages/list/list-common.css", "./pages/list/list.css"],
    providers: [GroceryListService]
})

export class ListPage implements OnInit{
    groceryList: Array<Grocery> = [];
    groceryItem: string= "";
    isLoading:boolean = false;
    listLoaded:boolean = false;
    
    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    
    constructor(private _groceryListService:GroceryListService){}    
    
    ngOnInit(){
        console.log("running");
        this.load();
    }
    
    private load(){
        this.isLoading = true
        this._groceryListService.load()
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject)=>{
                    this.groceryList.unshift(groceryObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
            });
    }
    
    add(){
        if(this.groceryItem.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        
        this._groceryListService.add(this.groceryItem)
            .subscribe(
                groceryObject => {
                    this.groceryList.unshift(groceryObject);
                    this.groceryItem = "";
                },
                ()=>{
                    alert({message:"An error occurred while adding an item to your list, cannot add at this time.", okButtonText:"OK"});
                    this.groceryItem = ""
                }
            )
    }
    private clearItems(){
        this.groceryList = [];
    }
       
    share() {
        let list = [];
        
        for(let i = 0, size = this.groceryList.length; i< size; i++){
            list.push(this.groceryList[i].name);
        }
        
        let listString = list.join(", ").trim();
        socialShare.shareText(listString);
    }
    
    delete(id:string){
        this._groceryListService.delete(id)
            .subscribe(
                ()=>{
                    alert("Deleted the item");
                    this.clearItems();
                    this.load();
                },
                ()=> alert("Could not sucessfully delete the item at this time.")
            );
    }
}