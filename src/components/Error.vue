<template>
    <div class="error-wrap">
        <h3>Rules</h3>
        <ul class="rules"
            v-show="filteredRules.length > 0"
        >
            <li class="rule"
                v-for="(rule, index) in filteredRules" 
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
        <h4 class="success"
            v-show="filteredRules.length === 0">
            🥳 Congrats! Your system will work.
        </h4>
    </div>
</template>

<script>
import { maxComponent, find, findObj } from '../utils/index.js'
import rules from '../../rules.json'

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

<style lang="scss">
li {
    padding: 0.5em;
    margin-bottom: .25em;
    border-radius: 5px;

    &.rule {
        background-color: rgba(255, 0, 0, 0.2); 
        border: 2px solid red;   
    }

    &.feature {
        background-color: rgba(0,255,0, 0.2);
        border: 2px solid green;
    }
}

.success {
    background-color: rgba(0,255,0, 0.2);
    border: 2px solid green;
    padding: 0.5em;
    border-radius: 5px;
}
</style>