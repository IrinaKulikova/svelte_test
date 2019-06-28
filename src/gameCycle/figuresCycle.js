import { get } from 'svelte/store';
import {  figures, ids, addTime } from '../stores/figures';

export function addFigures(){
    if(Date.now() - get(addTime) > 5000){
        addTime.set(Date.now());
        let currentId = get(ids);
        ids.set( currentId + 1);
        figures.update(fs => [
            ...fs,{x: 175, y: 0,  id: currentId, },
        ]);
    }
}

export function moveFigure() {
    figures.update(figures =>
        figures.map(f => ({
            ...f,
            y: f.y + 1,
        })),
    );
}

export function removeFigure(id) {
    figures.update(fs => fs.filter(f => f.id !== id));
}