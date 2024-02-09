"use strict";

import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Welcome back</h1>
        <p>This is a dashboard page</p>
        <p><a href="/posts" data-link></a>View recent posts</p>
        `;
  }
}
