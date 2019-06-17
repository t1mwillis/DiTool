<template>
<div>
<h2>errors</h2>
    <ul>
        <li
            v-show="!hasShifter"
        >
            You need at least one shifter.
        </li>
        <li
            v-show="!hasBattery"
        >
            You need one batttery.
        </li>
        <li
            v-show="!hasJunctionA"
        >
            You need one Junction A Box.
        </li>
        <li
            v-show="maxShifters"
        >
            You have too many shifters, maximum is 6.
        </li>
        <li
            v-show="maxBattery"
        >
            You can only have one battery.
        </li>
        <li
            v-show="maxRd"
        >
            You can only have one Rear Derailleur.
        </li>
        <li
            v-show="maxFd"
        >
            You can only have one Front Derailleur.
        </li>
    </ul>
    </div>
</template>

<script>
import { findComponent, maxComponent } from '../utils/index.js'

export default {
    name : 'Error',
    props: {
        items: Array,
        required: true,
        default: []
    },
    computed: {
        hasShifter() {
            return findComponent(this.items, "Shifter");
        },
        hasBattery() {
            return findComponent(this.items, "Battery");
        },
        hasJunctionA() {
            return findComponent(this.items, "Junction A");
        },
        maxShifters() {
            return maxComponent(this.items, "Shifter", 6);
        },
        maxBattery() {
            return maxComponent(this.items, "Battery", 1);
        },
        maxFd() {
            return maxComponent(this.items, "Front Derailleur", 1);
        },
        maxRd() {
            return maxComponent(this.items, "Rear Derailleur", 1);
        },
        maxJunctionA() {
            return maxComponent(this.items, "Junction A", 1);
        }
    }
}
</script>

<style>
</style>
