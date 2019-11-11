<template>
<div class="error-wrap">

    <h3>Rules</h3>
    <ul class="rules">
        <li v-for="(rule, index) in filteredRules" 
            :index="index"
            :key="index">{{rule.message}}</li>
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
    <h3>Features</h3>
    <ul>
        <li
            v-show="hasNewBattery"
        >
            Synchro shift will be supported by your system.
        </li>
        <li
            v-show="hasNewWirelessUnit && hasNewBattery"
        >
            Your system will communicate with the E-Tube Mobile App.
        </li>
    </ul>
    </div>
</template>

<script>
import { maxComponent, find, findObj } from '../utils/index.js'
import rules from '../../rules.json'
// import features from '../../features.json'

export default {
    name : 'Error',
    data() {
        return {
            rules,
            // features
        }
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
        default: []
    },
    computed: {
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
        },
        hasNewWirelessUnit() {
            return find(this.items, "modelNo", "EW-WU101")
                || find(this.items, "modelNo", "EW-WU111")
        },
        hasNewBattery() {
            return find(this.items, "modelNo", "BT-DN110-A")
                || find(this.items, "modelNo", "BM-DN110")
        },
        filteredRules(){
            return rules.filter(rule => {
                //items contains rule.contains
                //items contains rule.required
                //items does not contain rule.prohibit
                const { contains, required, prohibited } = rule
                const { items } = this

                let isContained = true
                let isRequired, isProhibited = false

                if (contains) {
                    isContained = findObj(contains, items).length > 0
                }

                if (required) {
                    isRequired = findObj(required, items).length == 0
                }

                if (prohibited) {
                    isProhibited = findObj(prohibited, items).length > 0
                }

                return isContained && ( isRequired || isProhibited )
            })
        }
    }
}
</script>

<style>
ul.errors li:before,
ul.rules li:before{
    content: '🛑';
    display: inline-block
}
</style>