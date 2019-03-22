import { Component } from "react";
import { Options } from "react-native-navigation";

export interface StoreState {}

export class NavComponent<P, S> extends Component {
  options: Options;
  constructor(props: P) {
    super(props)
  
    this.options = {};
  }
  
}