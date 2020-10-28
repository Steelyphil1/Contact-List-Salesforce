import { LightningElement, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ContactList extends LightningElement {
    //decorators api exposes recordId public property
    @api recordId;

    //wire reads salesforce data from the getContactList apex controller
    @wire(getContactList, {recordId:'$recordId'}) contacts;
}