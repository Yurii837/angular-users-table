import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepareUser'
})
export class PrepareUserPipe implements PipeTransform {

  concatFields() {

  }

  transform(users: User[]): any {
    const usersCopy = [...users]
    let index = 0;
    usersCopy.forEach((user: any) => {
      index++
      for (const key in user) {
        
        user.index = index
        switch (key) {
          case 'name': user[key] = `${user[key].first} ${user[key].last}`
            break
          case 'picture': user[key] = user[key].thumbnail
            break
          case 'location': user[key] = `${user[key].postcode} ${user[key].country} ${user[key].state} ${user[key].city}`
            break   
          default: user[key] = user[key]
        }
      }
    })
    return usersCopy
}
}