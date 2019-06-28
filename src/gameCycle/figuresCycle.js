import { get } from 'svelte/store';
import {  figures, ids, addTime, interval, delta, types } from '../stores/figures';

export function addFigures(){
    if(Date.now() - get(addTime) > get(interval)){
        addTime.set(Date.now());
        let randType = Math.floor(Math.random()*2)+1;
        figures.update(fs => [ ...fs,{x:100,y:0, id: get(ids),type: get(types)[randType]}]);
        interval.set(get(interval) * 0.99995);
        ids.set( get(ids) + 1);
    }
}

export function moveFigure() {
    let currentDelta = get(delta);
    figures.update(figures =>
        figures.map(f => ({ ...f, y: f.y + currentDelta,})),
    );
    delta.set(currentDelta * 1.00005);
}

export function removeFigure(id) {
    figures.update(fs => fs.filter(f => f.id !== id));
}