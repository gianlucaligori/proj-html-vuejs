import { reactive } from "vue";


export const store = reactive({

    dynamicFirstNav: [
                    "1.800.567.8910",
                    "Contact us",
                    "Alumni",
                    "Campus",
    ],

    dynamicNavFoot: [
                        'HOME',
                        'ABOUT',
                        'COURSES',
                        'EVENTS',
                        'FACILITIES',
                        'NEWS',
                        'ADMISSIONS',

    ],

    arrArticles: [
        {
            "author": "Admin",
            "title": "What do succesful grads think you should study?",
            "description": "Lorem ipsum",
            "url": "https://abcnews.go.com/US/hurricane-hanna-makes-landfall-texas/story?id=71985566",
            "source": "ABC News",
            "image": "../assets/images/news_single_post_header_1-400x222.jpg",
            "category": "UNI",
            "language": "IT",
            "country": "us",
            "published_at": "March 16th. 2016"
        },
        {
            "author": "Admin",
            "title": "Former Student discusses success in the fashion industry",
            "description": "Lorem ipsum",
            "url": "https://www.tmz.com/2020/07/30/nicki-minaj-husband-asks-judge-be-there-child-birth/",
            "source": "TMZ.com",
            "image": "../assets/images/news_single_post_header_2-400x222.jpg",
            "category": "Uni",
            "language": "IT",
            "country": "us",
            "published_at": "March 15th. 2016"
        },
        {
            "author": "Admin",
            "title": "How do you best prepare for university?",
            "description": "Lorem ipsum",
            "url": "https://www.espn.com/nfl/story/_/id/29572640/new-lions-safety-jayron-kearse-suspended-three-games",
            "source": "ESPN",
            "image": "../assets/images/news_single_post_header_3-400x222.jpg",
            "category": "Uni",
            "language": "IT",
            "country": "us",
            "published_at": "March 16th. 2016"
        }
    ]

    
  });