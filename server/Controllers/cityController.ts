import * as cityService from './../Services/cityService';

export async function getAllCities(req , res) {
    try {
        const users = await cityService.getAllCities();
        res.json(users);
    } catch (e) {
        res.send('Bad request');
    }
}


