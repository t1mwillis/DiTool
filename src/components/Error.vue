<template>
<div class="error-wrap">
<h3>Errors</h3>
    <ul class="errors">
        <li
            v-show="!hasShifter"
        >
            You need at least one Shifter.
        </li>
        <li
            v-show="!hasBattery"
        >
            You need one Battery.
        </li>
        <li
            v-show="!hasJunctionA"
        >
            You need one Junction A Box.
        </li>
        <li
            v-show="maxShifters"
        >
            You have too many Shifters, maximum is 6.
        </li>
        <li
            v-show="maxBattery"
        >
            You can only have one Battery.
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
        <li
            v-show="maxWirelessUnit"
        >
            You can only have one Wireless Unit.
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
            return findComponent(this.items, "Shifting");
        },
        hasBattery() {
            return findComponent(this.items, "Battery");
        },
        hasJunctionA() {
            return findComponent(this.items, "Junction-A");
        },
        hasBatteryMount() {
            return findComponent(this.items, "Battery Mount");
        },
        maxShifters() {
            return maxComponent(this.items, "Shifting", 6);
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
            return maxComponent(this.items, "Junction-A", 1);
        },
        maxWirelessUnit() {
            return maxComponent(this.items, "Wireless Unit", 1);
        }
    }
}
</script>

<style>
ul.errors li:before{
    content: '🛑';
    display: inline-block
}
</style>