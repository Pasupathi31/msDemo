import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";

  
const routes: Routes = [
  { path: "chat", component: ChatComponent }
//   { path: "contactus", component: ContactUsComponent },
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}