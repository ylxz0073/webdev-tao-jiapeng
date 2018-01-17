import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  websites: Website[] = [];
  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {
    this.websites = this.websiteService.findAllWebsites();
  }

}
