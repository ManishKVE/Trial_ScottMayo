
export class Job {
  // constructor( public id = 0, public name = '', public model = '', public price = '') {}
  constructor(public id = 0, public title = '', public description = '', public department = '',
              public jobStatus = true, public location = '', public hiringManager = ''
  ) { }
}

