

contacts = [
    {
    name: 'Michele',
    avatar: './assets/avatar_1.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Hai portato a spasso il cane?',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Ricordati di stendere i panni',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 16:15:22',
    message: 'Tutto fatto!',
    status: 'received',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Fabio',
    avatar: './assets/avatar_2.jpg',
    visible: false,
    messages: [
    {
    date: '20/03/2020 16:30:00',
    message: 'Ciao come stai?',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '20/03/2020 16:30:55',
    message: 'Bene grazie! Stasera ci vediamo?',
    status: 'received',
    option: 'not-visible',
    },
    {
    date: '20/03/2020 16:35:00',
    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
    status: 'sent',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Samuele',
    avatar: './assets/avatar_3.jpg',
    visible: false,
    messages: [
    {
    date: '28/03/2020 10:10:40',
    message: 'La Marianna va in campagna',
    status: 'received',
    option: 'not-visible',
    },
    {
    date: '28/03/2020 10:20:10',
    message: 'Sicuro di non aver sbagliato chat?',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '28/03/2020 16:15:22',
    message: 'Ah scusa!',
    status: 'received',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Alessandro B.',
    avatar: './assets/avatar_4.jpg',
    visible: false,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Lo sai che ha aperto una nuova pizzeria?',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Si, ma preferirei andare al cinema',
    status: 'received',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Alessandro L.',
    avatar: './assets/avatar_5.jpg',
    visible: false,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ricordati di chiamare la nonna',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Va bene, stasera la sento',
    status: 'received',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Claudia',
    avatar: './assets/avatar_6.jpg',
    visible: false,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ciao Claudia, hai novità?',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Non ancora',
    status: 'received',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:51:00',
    message: 'Nessuna nuova, buona nuova',
    status: 'sent',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Federico',
    avatar: './assets/avatar_7.jpg',
    visible: false,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Fai gli auguri a Martina che è il suo compleanno!',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Grazie per avermelo ricordato, le scrivo subito!',
    status: 'received',
    option: 'not-visible',
    }
    ],
    },
    {
    name: 'Davide',
    avatar: './assets/avatar_8.jpg',
    visible: false,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ciao, andiamo a mangiare la pizza stasera?',
    status: 'received',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
    status: 'sent',
    option: 'not-visible',
    },
    {
    date: '10/01/2020 15:51:00',
    message: 'OK!!',
    status: 'received',
    option: 'not-visible',
    }
    ],
    }
]

    const app = new Vue ({
        el: '#app',
        data: {
            contacts: contacts,
            currentContact: 0,
            filter: '',
            messageToPush: '',
            aVis: false,
            isSearching: false,
            
        },
            
            
        methods: {
            setCurrentContact(i) {
                this.currentContact = i;
            },
            sentMessagePush() {
                cleanedText = this.messageToPush.trim()
               if (cleanedText === '') return
                messages = this.contacts[this.currentContact].messages
                message = {
                    date: '',
                    message: cleanedText,
                    status: 'sent',
                    option: 'not-visible',
                }
                messages.push(message)
                this.messageToPush = ''
                setTimeout(() => {
                    const messageOk = {
                        date: '',
                        message: 'Ok!',
                        status: 'received',
                        option: 'not-visible',
                    }
                    messages.push(messageOk)
                },2000)
            },
            hide (index) {
                // console.log('click on hide')
                if (this.contacts[this.currentContact].messages[index].option === 'visible') {
                    this.contacts[this.currentContact].messages[index].option = 'not-visible'
                }
                 else {this.contacts[this.currentContact].messages[index].option = 'visible'}
            }
        },
    })
                    
            

                

    
    



// stato focus all'input 
   