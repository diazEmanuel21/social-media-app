import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-dashboard-app';
  socialMediaPeople = [
    {
      socialNetwork: "facebook",
      username: "nathanf",
      desc: 'followers',
      followers: 1987,
      followersPerDay: 12,
      iconResult: "icon-up",
      border: "border-fb",
      className: "positive-result"
    },
    {
      socialNetwork: "twitter",
      username: "nathanf",
      desc: 'followers',
      followers: 1044,
      followersPerDay: 99,
      iconResult: "icon-up",
      border: "border-twitter",
      className: "positive-result"
    },
    {
      socialNetwork: "instagram",
      username: "realnathanf",
      desc: 'followers',
      followers: "11k",
      followersPerDay: 1099,
      iconResult: "icon-up",
      border: "border-ig",
      className: "positive-result"
    },
    {
      socialNetwork: "youtube",
      username: "Nathan F.",
      desc: 'subscribers',
      followers: 8239,
      followersPerDay: 144,
      iconResult: "icon-down",
      border: "border-yt",
      className: "negative-result"
    }
  ];
  interactionSocialMedia = [
    {
      name: "facebook",
      title: "Page Views",
      description: "87",
      percentage: "3",
      iconResult: "icon-up",
      className: "positive-result"
    },
    {
      name: "facebook",
      title: "Likes",
      description: "52",
      percentage: "2",
      iconResult: "icon-down",
      className: "negative-result"
    },
    {
      name: "instagram",
      title: "Likes",
      description: "5462",
      percentage: "2257",
      iconResult: "icon-up",
      className: "positive-result"
    },
    {
      name: "instagram",
      title: "Profile Views",
      description: "52k",
      percentage: "1375",
      iconResult: "icon-up",
      className: "positive-result"
    },
    {
      name: "twitter",
      title: "Retweets",
      description: "117",
      percentage: "303",
      iconResult: "icon-up",
      className: "positive-result"
    },
    {
      name: "twitter",
      title: "Likes",
      description: "507",
      percentage: "553",
      iconResult: "icon-up",
      className: "positive-result"
    },
    {
      name: "youtube",
      title: "Likes",
      description: "107",
      percentage: "19",
      iconResult: "icon-down",
      className: "negative-result"
    },
    {
      name: "youtube",
      title: "Total Views",
      description: "1407",
      percentage: "12",
      iconResult: "icon-down",
      className: "negative-result"
    }
  ]
  dark = false;

  toggleMode(): void {
    this.dark = !this.dark;
  }
}
