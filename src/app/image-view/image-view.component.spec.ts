import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { MaterialModule } from '../material/material.module';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ImageViewComponent]
    });
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display the image src and alt', () => {
    // set the src and alt for an image
    const imgSrc = "https://apod.nasa.gov/apod/image/2308/SunMonster_Wenz_960.jpg";
    const imgAlt = "Monster Solar Prominence";
    component.imageSrc = imgSrc;
    component.imageAlt = imgAlt;

    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toBe(imgSrc);
    expect(imgElement.alt).toBe(imgAlt);

  });

  it('should correctly display the image description', () => {
    // Set the description text
    const imgDescription = "The monsters that live on the Sun are not like us. They are larger than the Earth and made of gas hotter than in any teapot. They have no eyes, but at times, many tentacles. They float. Usually, they slowly change shape and just fade back onto the Sun over about a month. Sometimes, though, they suddenly explode and unleash energetic particles into the Solar System that can attack the Earth.  Pictured is a huge solar prominence imaged almost two weeks ago in the light of hydrogen. Captured by a small telescope in Gilbert, Arizona, USA, the monsteresque plume of gas was held aloft by the ever-present but ever-changing magnetic field near the surface of the Sun. Our active Sun continues to show an unusually high number of prominences, filaments, sunspots, and large active regions as solar maximum approaches in 2025.";
    component.imageDescription = imgDescription;
    //trigger component change detection
    fixture.detectChanges();
    const pElement: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(pElement.textContent).toBe(imgDescription);
  });
});
