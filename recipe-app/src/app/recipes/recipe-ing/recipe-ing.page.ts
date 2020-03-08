import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-ing',
  templateUrl: './recipe-ing.page.html',
  styleUrls: ['./recipe-ing.page.scss'],
})

export class RecipeIngPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController,
    ) { }
    
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId = paraMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: "Are you sure",
      message: "Do you really want to delete the recipe?",
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id),
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl =>{
      alertEl.present();
    })
    
  }
}
