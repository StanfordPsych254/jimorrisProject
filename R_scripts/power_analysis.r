b = read.csv('/Users/Josh/Dropbox/Stanford PhD/Classes/Year 2/Winter 2016/Stats 254/Problem Sets/Git/jimorrisProject/original_materials_data/1b.csv')
  
c = read.csv('/Users/Josh/Dropbox/Stanford PhD/Classes/Year 2/Winter 2016/Stats 254/Problem Sets/Git/jimorrisProject/original_materials_data/1c.csv')

d = read.csv('/Users/Josh/Dropbox/Stanford PhD/Classes/Year 2/Winter 2016/Stats 254/Problem Sets/Git/jimorrisProject/original_materials_data/1d.csv')

b$Split = factor(b$Split)
levels(b$Split)[1] = 'Low'
levels(b$Split)[2] = 'High'

b$Frame = factor(b$Resort)
levels(b$Frame)[1] = 'Store'
levels(b$Frame)[2] = 'Resort'

summary(lm(Beer~Split*Frame,data=b))

contrasts(b$Split) = cbind(Low=c(1,0))

summary(lm(scale(Beer)~Split*Frame,data=b))
#Cohens d = 0.48151
#Variance = .10


c$Split = factor(c$split)
levels(c$Split)[1] = 'Low'
levels(c$Split)[2] = 'High'

c$Frame = factor(c$resort)
levels(c$Frame)[1] = 'Store'
levels(c$Frame)[2] = 'Resort'

c$Beer = NA
c$pay[c$pay == '$3 '] = '3'
c$Beer = as.numeric(as.character(c$pay))

#Removed outliers in this study at less than 20; in d) left 20 in
c=c[c$Beer < 20,]

summary(lm(Beer~Split*Frame,data=c))

contrasts(c$Split) = cbind(Low=c(1,0))

summary(lm(scale(Beer)~Split*Frame,data=c))
#Cohen's d = .196
#Variance = .03

d$Split = factor(d$split)
levels(d$Split)[1] = 'Low'
levels(d$Split)[2] = 'High'

d$Frame = factor(d$resort)
levels(d$Frame)[1] = 'Store'
levels(d$Frame)[2] = 'Resort'

d$Beer = NA
d$wtp[d$wtp == '$10 '] = '10'
d$wtp[d$wtp == '$10.00 '] = '10'
d$wtp[d$wtp == '$15 '] = '15'
d$wtp[d$wtp == '$3.99 '] = '3.99'
d$wtp[d$wtp == 'Oct-00'] = ''
d$wtp[d$wtp == '1,000'] = '1000'
d$wtp[d$wtp == '10 00'] = '10'
d$wtp[d$wtp == '5,-'] = '5'
d$wtp[d$wtp == '5,00'] = '5'
d$wtp[d$wtp == '7,00'] = '7'
d$Beer = as.numeric(as.character(d$wtp))

d_2=d[d$Beer <= 20,]

summary(lm(Beer~Split*Frame,data=d_2))

contrasts(d_2$Split) = cbind(Low=c(1,0))

summary(lm(scale(Beer)~Split*Frame,data=d_2))
#Cohen's d = .0952
#Variance = .0081

x=c(.48,.20,.10)
y=c(.1,.03,.008)

library(metafor)

rma(x,y,'FE')
library(pwr)
pwr.t.test(n=2642,d = .1546, sig.level = .05)
pwr.t.test(d = .1546, sig.level = .05,power = .8)
