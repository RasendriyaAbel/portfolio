import { DollarSign, Trophy, BarChart3, Star, TrendingUp } from 'lucide-react'

function Stats() {
  return (
    <div className="mt-16 card p-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center">
              <DollarSign className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-primary-500">4830</div>
          <div className="text-sm text-gray-600">Happy Customer</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center">
              <Trophy className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-primary-500">90+</div>
          <div className="text-sm text-gray-600">Award Win</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-primary-500">3065</div>
          <div className="text-sm text-gray-600">Successful Project</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center">
              <Star className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-primary-500">20+</div>
          <div className="text-sm text-gray-600">Year of Experience</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-primary-500">90%</div>
          <div className="text-sm text-gray-600">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  )
}

export default Stats

