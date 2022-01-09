const usersMap = new Map()

usersMap.set('Jotaro', 'Admin');
usersMap.set('Dio', 'User');
usersMap.set('Joseph', 'Admin');
usersMap.set('Polnareff', 'Admin');
usersMap.set('Kira', 'User');


function getAdmins(map)
{
    let adminsList = []
    for([key, value] of map){
        
        if(value === 'Admin')
        {
            adminsList.push(key);
        }
    }
    return adminsList;
}

console.log(getAdmins(usersMap));