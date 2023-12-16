import { Routes } from "@angular/router";
import { AboutComponent } from "../header/about/about.component";
import { CurrentOpeningsComponent } from "../header/current-openings/current-openings.component";
import { JoinComponent } from "../header/join/join.component";
import { SignInComponent } from "../header/sign-in/sign-in.component";

export const ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'current-openings', component: CurrentOpeningsComponent },
    { path: 'join', component: JoinComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: '', redirectTo: '/current-openings', pathMatch: 'full' }, // Redirect to the default route
];